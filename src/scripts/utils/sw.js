import 'regenerator-runtime'
import CacheHelper from './cache-helper'

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  '/icons/Web/icons8-meals-flaticons-lineal-color-16.png',
  '/icons/Web/icons8-meals-flaticons-lineal-color-32.png',
  '/icons/Web/icons8-meals-flaticons-lineal-color-96.png',
  '/icons/Windows/icons8-meals-flaticons-lineal-color-70.png',
  '/icons/Android-Chrome/icons8-meals-flaticons-lineal-color-72.png',
  '/icons/Android-Chrome/icons8-meals-flaticons-lineal-color-96.png',
  '/index.html',
  './app.bundle.js',
  '/src/public/manifest.json',
  './sw.bundle.js'
]

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
