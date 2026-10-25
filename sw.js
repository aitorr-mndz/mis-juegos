const CACHE_NAME = 'app-juegos-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js'
];

// Instalar el Service Worker y guardar los archivos base en la memoria interna
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Responder desde el guardado local si no hay internet o para cargar más rápido
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
