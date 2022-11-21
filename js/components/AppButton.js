export default {
    template:`
        <button 
            :class="{
                'py-2 px-4 rounded disabled:cursor-not-allowed': true,
                'bg-blue-500 hover:bg-blue-700 text-white font-bold': type === 'primary',
                'bg-violet-500 hover:bg-violet-700 text-white font-bold': type === 'secondary',
                'bg-slate-500 hover:bg-slate-700 text-white font-bold': type === 'muted'            
                }"
            :disabled="processing"
        >
            <div>
                <span :class="{'spinner': processing}"></span>
                <span :class="{'text-transparent': processing}"><slot></slot></span>
            </div>
        </button>
    `,
    props: {
        type: {
            type: String,
            default: "primary"
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
}