const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .addEntry('app', './assets/js/main.js')
    .addStyleEntry('global', './assets/scss/global.scss')
    .enableSassLoader(function (sassOptions) {}, {
        resolveUrlLoader: false
    })
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
;

let config = Encore.getWebpackConfig();
config.watchOptions = { poll: true, ignored: /node_modules/ };

module.exports = config;