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

        <div class="space-y-4">
            <div>
                <assignment-list 
                    :assignments="filters.inProgress" 
                    title="in Progress"
                    :decoration=true
                    color="lime"
                ></assignment-list>
                <assignment-create @creating="add"></assignment-create> 
            </div>
            <div>
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed"
                    :decoration=true
                    color="emerald"
                ></assignment-list>
            </div>
        </div>
    `,
    data() {
        return {
            assignments: [
                { id:1, name: "Finish project", complete: false, tag: "Vue 3" },
                { id:2, name: "Read Chapter 4", complete: false, tag: "Google's engineer" },
                { id:3, name: "Make dinner", complete: false,  tag: "Personal"}
            ],
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