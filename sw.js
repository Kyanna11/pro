const CACHE_NAME = "abyssal-letter-v1";
const CACHE_LIST = [
  "/",
  "/index.html",
  "/manifest.json",
  "/F9DDF07E-169D-48E5-BD28-8FF3A5EF0900.jpeg"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CACHE_LIST)));
});
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
