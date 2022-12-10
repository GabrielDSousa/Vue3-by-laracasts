import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        'assignment': Assignment,
        'assignment-tags': AssignmentTags
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
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)"
                :current-tag="currentTag"
                :color="color"
                @change="currentTag = $event"
            />
            
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
        }
    }
}