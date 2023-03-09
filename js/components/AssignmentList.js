import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
  components: {
    assignment: Assignment,
    "assignment-tags": AssignmentTags,
    panel: Panel,
  },
  template: `
        <panel 
            v-show="assignments.length" 
            class="w-80"
            :color="color"
        >
            <header class="flex items-start justify-between">
                <div class="flex gap-2 items-baseline">
                    <h2
                        class="font-bold mb-2 text-lg" 
                        :class="{
                            'underline decoration-2': decoration
                        }, 'decoration-'+color+'-400'"
                    >
                        {{ title }}
                    </h2>
                    <span>({{ assignments.length }})</span>
                </div>
                
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </header>
            
            <assignment-tags 
                v-model:currentTag="currentTag"
                :initial-tags="assignments.map(a => a.tag)"
                :color="color"
            />
            
            <ul class="divide-y divide-slate-600 mb-4">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
            
            <slot></slot>
        </panel>
    `,
  props: {
    assignments: Array,
    title: String,
    decoration: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "gray",
    },
    canToggle: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentTag: "All",
    };
  },
  computed: {
    filteredAssignments() {
      if (this.currentTag === "All") {
        return this.assignments;
      }

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },
};
