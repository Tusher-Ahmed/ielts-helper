/* IELTS Helper — Service Worker (offline support) */
const CACHE = 'ielts-helper-v6';
const ASSETS = [
  './',
  './index.html',
  './study-plan.html',
  './speaking-module.html',
  './writing-module.html',
  './reading-module.html',
  './listening-module.html',
  './listening-tests.html',
  './listening-tests-data.js',
  './reading-tests.html',
  './reading-tests-data.js',
  './practice.html',
  './vocabulary.html',
  './cue-cards.html',
  './grammar-speaking.html',
  './routine.html',
  './mock-test.html',
  './mock-data.js',
  './dashboard.html',
  './manifest.json',
  './icon.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Stale-while-revalidate: serve from cache instantly, update in background.
   Falls back to network when not cached; caches successful GET responses
   (including cross-origin fonts) for offline use. */
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const network = fetch(e.request).then((res) => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
