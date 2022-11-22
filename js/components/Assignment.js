export default {
    template: `
        <li>
            <label :for=assignment.id>
                <input 
                    type="checkbox" 
                    :name=assignment.id 
                    :id=assignment.id 
                    v-model="assignment.complete"
                >
                {{ assignment.name }}
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}