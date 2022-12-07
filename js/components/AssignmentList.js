import Assignment from "./Assignment.js";
export default {
    components: {
      'assignment': Assignment
    },
    template: `
        <section v-show="assignments.length" class="mb-2">
            <header class="flex gap-4 items-baseline">
                <h2
                    class="font-bold mb-2 text-lg" 
                    :class="{
                        'underline decoration-2': decoration
                    }, 'decoration-'+color+'-400'"
                >
                    {{ title }}
                </h2>
                <span>({{ assignments.length }})</span>
            </header>
            
            <div class="flex gap-2 mb-4">
                <button
                    @click="currentTag = tag"
                    v-for="tag in tags"
                    class="border rounded px-1 py-px text-xs"
                    :class="{['border-'+color+'-200 text-'+color+'-200']: tag === currentTag}"
                >{{ tag }}</button>
            </div>
            
            <ul class="divide-y divide-slate-600">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,
    props: {
        assignments: Array,
        title: String,
        decoration: {
            type: Boolean,
            default: false
        },
        color: {
            type: String,
            default: "violet"
        }
    },
    data() {
      return {
        currentTag: 'All',
      }
    },
    computed: {
        filteredAssignments() {
          if(this.currentTag === 'All') {
              return this.assignments;
          }

          return this.assignments.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['All', ...new Set(this.assignments.map(a => a.tag))]
        }
    }
}