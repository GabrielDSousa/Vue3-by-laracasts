import AssignmentList from "./AssignmentList.js";
export default {
    components: {
        'assignment-list': AssignmentList
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
    `,
    data() {
        return {
            assignments: [
                { id:1, name: "Finish project", complete: false },
                { id:2, name: "Read Chapter 4", complete: false },
                { id:3, name: "Turn in homework", complete: false }
            ]
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            };
        }
    }
}