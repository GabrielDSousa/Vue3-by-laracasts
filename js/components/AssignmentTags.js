export default {
    template: `
        <div class="flex gap-2 mb-4">
            <button
                @click="$emit('change', tag)"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{['border-'+color+'-200 text-'+color+'-200']: tag === currentTag}"
            >{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
        color: String
    },
    computed: {
        tags() {
            return ['All', ...new Set(this.initialTags)]
        }
    }
}