export default {
    root: {
        class: [
            // Flexbox
            'inline-flex items-center',

            // Spacing
            'px-5 py-3',

            // Shape
            'rounded-full',

            // Colors
            'text-white',
            'bg-primary',
            'h-[38px]'
        ]
    },
    label: {
        class: 'text-xl font-semibold m-0'
    },
    icon: {
        class: 'leading-6 mr-2'
    },
    image: {
        class: ['w-8 h-8 -ml-2 mr-2', 'rounded-full']
    },
    removeIcon: {
        class: [
            // Shape
            'rounded-md leading-6',

            // Spacing
            'ml-[10px] -mt-[3px]',

            // Size
            'size-[18px]',

            // Transition
            'transition duration-200 ease-in-out',

            // Misc
            'cursor-pointer'
        ]
    }
};
