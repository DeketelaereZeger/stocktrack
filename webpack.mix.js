let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
mix.webpackConfig({
    plugins: [
        new SWPrecacheWebpackPlugin({
            cacheId: 'pwa',
            filename: 'service-worker.js',
            staticFileGlobs: ['public/**/*.{css,eot,svg,ttf,woff,woff2,js,html}'],
            minify: true,
            stripPrefix: 'public/',
            handleFetch: true,
            dynamicUrlToDependencies: { //you should add the path to your blade files here so they can be cached
                //and have full support for offline first (example below)

                '/': ['resources/views/index/index.blade.php'],
                '/search': ['resources/views/layouts/search.blade.php'],
                '/indices': ['resources/views/indices/indice.blade.php'],
                '/stocks': ['resources/views/companies/company.blade.php'],
                '/indices/AEX': ['resources/views/indices/indice.blade.php'],
                '/indices/BEL20': ['resources/views/indices/indice.blade.php'],
                '/stocks/AALB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ABN': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/AGN': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/AD': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/AKZA': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ATC': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/MT': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ASML': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ASRNL': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/DSM': ['resources/views/companies/companiesoverview.blade.php'],
                /*'/stocks/GLPG': ['resources/views/companies/companiesoverview.blade.php'],*/
                '/stocks/GTO': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/HEIA': ['resources/views/companies/companiesoverview.blade.php'],
                /*'/stocks/INGA': ['resources/views/companies/companiesoverview.blade.php'],*/
                '/stocks/KPN': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/NN': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/PHIA': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/LIGHT': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/RAND': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/RELX': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/RDSA': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/UL': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/UNA': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/VPK': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/WKL': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ABI': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ABLX': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ACKB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/AGS': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/APAM': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/BPOST': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/COFB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/COLR': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ENGI': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/GLPG': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/GBLB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/INGA': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/KBC': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/ONTEX': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/PROX': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/SOF': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/SOLB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/TNET': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/UCB': ['resources/views/companies/companiesoverview.blade.php'],
                '/stocks/UMI': ['resources/views/companies/companiesoverview.blade.php'],

            },
            staticFileGlobsIgnorePatterns: [/\.map$/, /mix-manifest\.json$/, /manifest\.json$/, /service-worker\.js$/],
            navigateFallback: '/',
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
                    handler: 'cacheFirst'
                },
                {
                    urlPattern: /^https:\/\/www\.thecocktaildb\.com\/images\/media\/drink\/(\w+)\.jpg/,
                    handler: 'cacheFirst'
                }
            ],
// importScripts: ['./js/push_message.js']
        })
    ]
});


mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css');
