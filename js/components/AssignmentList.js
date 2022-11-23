import Assignment from "./Assignment.js";
export default {
    components: {
      'assignment': Assignment
    },
    template: `
        <section v-show="assignments.length" class="mb-4">
            <h2 :class="titleClass">
                {{ title }}
            </h2>
        
            <ul class="divide-y divide-slate-600">
                <assignment 
                    v-for="assignment in assignments" 
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
            default: null
        }
    },
    computed: {
        titleClass() {
            let base = 'font-bold mb-2 text-lg';
            let underline = this.decoration ? ' underline decoration-2': ' ';
            let underlineColor = this.color ? ' decoration-'+this.color+'-400': ' ';

            return base+underline+underlineColor
        }
    }
}