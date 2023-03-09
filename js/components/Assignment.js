export default {
    template: `
        <li class="py-2">
            <label :for=assignment.id>
                <input 
                    type="checkbox" 
                    :name=assignment.id 
                    :id=assignment.id 
                    v-model="assignment.complete"
                    class="mr-2"
                >
                {{ assignment.name }}
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}