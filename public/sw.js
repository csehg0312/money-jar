const CACHE_NAME = 'sweetalert';
const CACHE_2 = 'live';
const linksStyle = [
  'https://cdn.jsdelivr.net/npm/sweetalert2@11.10.6/dist/sweetalert2.min.css',
  // add more links here as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        const promises = linksStyle.map(link => cache.add(new Request(link)));
        return Promise.all(promises);
      })
  );
});

self.addEventListener('fetch', event => {
  const url = event.request.url;
  for (const link of linksStyle) {
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