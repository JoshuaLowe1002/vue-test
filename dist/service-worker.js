importScripts("/precache-manifest.bb33472e5467f70531db427ba8654abc.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.suppressWarnings()
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

self.addEventListener('message', msg => {
    if (msg.data.action == 'skipWaiting') {
        self.skipWaiting()
    }
})

