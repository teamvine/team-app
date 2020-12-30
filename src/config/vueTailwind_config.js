import TInput from 'vue-tailwind/dist/t-input'
import TButton from 'vue-tailwind/dist/t-button'
import TDialog from 'vue-tailwind/dist/t-dialog'

export const Vue_t_settings = {
    't-dialog': {
        component: TDialog,
        props: {
        }
    },
    't-input': {
        component: TInput,
        props: {
            classes: 'block w-full px-3 py-2 text-black placeholder-gray-400 transition duration-100 ease-in-out bg-white border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
            // ...More settings
        }
    },
    't-button': {
        component: TButton,
        props: {
            classes: 'block px-4 py-2 text-white transition duration-100 ease-in-out bg-blue-500 border border-transparent rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50  disabled:opacity-50 disabled:cursor-not-allowed',
            // ...More settings
        }
    }
}