import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    components: {
        'assignment-list': AssignmentList,
        'assignment-create': AssignmentCreate
    },
    template: `
        <header>
            <h1 class="font-bold mb-8 text-xl text-center">
                Assignments
            </h1>
        </header>

        <section class="flex gap-8">
            <assignment-list 
                :assignments="filters.inProgress" 
                title="in Progress"
                :decoration=true
                color="lime"
            >
                <assignment-create @creating="add"></assignment-create>     
            </assignment-list>
            <assignment-list 
                v-if="showCompleted"
                :assignments="filters.completed" 
                title="Completed"
                :decoration=true
                color="emerald"
                can-toggle
                @toggle="showCompleted = !showCompleted"
            ></assignment-list>
        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
               this.assignments = assignments;
            });
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    },
    methods: {
        add(name) {
            this.assignments.push({
                id: this.uuidv4(),
                name: name,
                completed: false
            })
        },
        uuidv4() {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }
    }
}