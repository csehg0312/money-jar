const CACHE_NAME = 'sweetalert';
const links = [
  'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.6/dist/sweetalert2.min.css',
  // add more links here as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        const promises = links.map(link => cache.add(new Request(link)));
        return Promise.all(promises);
      })
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  for (const link of links) {
    if (url.endsWith(link)) {
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            return fetch(event.request);
          })
      );
      break;
    }
  }
});