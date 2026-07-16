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
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'arcilla': '#F4F1DE',    // Fondo general
                'terracota': '#E07A5F',  // Botones principales
                'talavera': '#3D5A80',   // Acentos y detalles
                'carbon': '#2B2D42',     // Textos oscuros
            }
        },
    },

    plugins: [forms],
};