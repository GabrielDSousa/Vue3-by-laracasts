import AssignmentList from "./AssignmentList.js";
import AppButton from "./AppButton.js";
export default {
    components: {
        'assignment-list': AssignmentList,
        'app-button': AppButton
    },
    template: `
        <header>
            <h1 class="font-bold mb-8 text-xl text-center">
                Assignments
            </h1>
        </header>

        <assignment-list 
            :assignments="filters.inProgress" 
            title="in Progress"
            :decoration=true
            color="lime"
        ></assignment-list>
        <assignment-list 
            :assignments="filters.completed" 
            title="Completed"
            :decoration=true
            color="emerald"
        ></assignment-list>
        
        <form @submit.prevent="add" class="space-x-2 flex">
            <input 
                v-model="newAssignment"
                placeholder="New assignment..." 
                type="text" 
                name="newAssignment" 
                id="newAssignment" 
                class="bg-neutral-800 border-b-2 border-slate-600"
            >
            <app-button type="primary">Add</app-button>
        </form>
    `,
    data() {
        return {
            assignments: [
                { id:1, name: "Finish project", complete: false },
                { id:2, name: "Read Chapter 4", complete: false },
                { id:3, name: "Turn in homework", complete: false }
            ],
            newAssignment: ''
        }
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
        add() {
            this.assignments.push({
                id: this.uuidv4(),
                name: this.newAssignment,
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