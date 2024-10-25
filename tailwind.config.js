import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors:{
                "lilaPrincipal":"#6A0574",
                "azulFondo":"#25283D",
                "carne":"#D4A5A5"
            },
            fontSize: {
                'responsive-h1': ['clamp(1.5em, 11vw, 5em)'],
                'responsive-h2': ['clamp(1.1em, 9.64vw, 4em)'],
                'responsive-h4': ['clamp(0.5em,5vw, 1.5em)'],
                'responsive-ul': ['clamp(1em,5vw, 2.5em)']
            },
            width:{
                'responsive-width': ['clamp(16em, 90vw, 40em)'],
                'responsive-first-button-width': ['clamp(8em, 16vw, 9em)']
            },
            height:{
                'responsive-height-first-image': ['clamp(10em, 60vw, 30em)'],
                'responsive-first-button-height': ['clamp(2.5em, 8vw, 3em)']
            },
            screens:{
                'custom-flex-wrap-first-title':{max:'1309px'},
                'custom-flex-wrap-little-devices':{max:'755px'},
            }

        },
    },

    plugins: [forms],
};
