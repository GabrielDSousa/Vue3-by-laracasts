export default {
  template: `
        <div class="w-80 bg-neutral-700 p-4 border rounded-lg"
        :class="'border-'+color+'-400'">
            <h2 class="font-bold mb-2" v-if="$slots.heading">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer" 
                class="border-gray-600 border-t mt-4 pt-4 text-sm"
                :class="'border-'+color+'-400'"
                >
                <slot name="footer" />
            </footer>
        </div>
    `,
  props: {
    heading: String,
    color: {
      type: String,
      default: "gray",
    },
  },
};
