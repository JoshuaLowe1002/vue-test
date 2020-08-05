module.exports = {
    // PWA
    pwa: {
        workboxPluginMode: 'InjectManifest',
        workboxOptions: {
            swSrc: 'src/service-worker.js'
        },
        themeColor: '#2198F6',
        icons: [{
                "src": "./img/icons/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "./img/icons/apple-touch-icon.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
    },

    // global scss variables
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import '@/scss/_variables.scss';
                `
            }
        }
    }
}