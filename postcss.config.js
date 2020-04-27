const tailwindcss = require('tailwindcss');


const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
        './htdocs/site/templates/*.php',
        './htdocs/site/snippets/*.php',
        './htdocs/site/snippets/**/*.php',
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});


module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
        ? [purgecss] // what other postcss plugins should run when doing parcel build
        : []
    ]
}