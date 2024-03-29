import AppButton from "./AppButton.js";

export default {
    template: `
        <form @submit.prevent="create" class="gap-2 flex justify-between">
            <input 
                v-model="newAssignment"
                placeholder="New assignment..." 
                type="text" 
                name="newAssignment" 
                id="newAssignment" 
                class="bg-neutral-700 border-b-2 border-slate-600 w-full"
            >
            <app-button type="primary">Add</app-button>
        </form>
    `,
    components: {
        'app-button': AppButton
    },
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        create() {
            this.$emit('creating', this.newAssignment);
            this.newAssignment = '';
        }
    }
}