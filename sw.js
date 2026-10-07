self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('clinic-store').then((cache) => cache.addAll(['/Nevada1/', '/Nevada1/index.html'])));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
