/** tailwind.config.js */

/** @type {import('tailwindcss').Config} */
module.exports = {
    /* Tell Tailwind which files to scan so it only ships used classes */
    content: [
        './src/views/**/*.twig',
        './src/assets/scripts/**/*.js',
    ],

    /* Let Salla's CSS variables stay as the source of truth for brand colors.
       We extend Tailwind's theme so you can write e.g. bg-primary in Twig. */
    theme: {
        extend: {
            colors: {
                primary:   'var(--primary)',
                'primary-dark':  'var(--primary-dark)',
                'primary-light': 'var(--primary-light)',
                footer:    'var(--footer-bg)',
            },
            fontFamily: {
                base: ['var(--font-base)', 'sans-serif'],
            },
            borderRadius: {
                sm: 'var(--radius-sm)',
                md: 'var(--radius-md)',
                lg: 'var(--radius-lg)',
            },
            boxShadow: {
                sm: 'var(--shadow-sm)',
                md: 'var(--shadow-md)',
                lg: 'var(--shadow-lg)',
            },
        },
    },

    /* No Tailwind preflight (CSS reset) — we manage our own base styles
       so it won't conflict with Salla web components. */
    corePlugins: {
        preflight: false,
    },

    plugins: [],
};
