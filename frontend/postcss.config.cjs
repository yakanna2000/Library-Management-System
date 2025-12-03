// frontend/postcss.config.cjs
module.exports = {
    plugins: [
        // use the new Tailwind PostCSS wrapper
        require('@tailwindcss/postcss'),
        require('autoprefixer')
    ]
};
