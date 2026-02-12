const version = 0.7;
const CACHE_NAME = `mafia-audio-v${version}`;
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./logo.png",
  "./apple-touch-icon.png",
  "./favicon-96x96.png",
  "./favicon.ico",
  "./favicon.svg",
  "./icon-192x192.png",
  "./icon-512x512.png",
  "./images/head.png",
  "./audio/page-flip.mp3",
  "./audio/00.mp3",
  "./audio/01.mp3",
  "./audio/02.mp3",
  "./audio/03.mp3",
  "./audio/04.mp3",
  "./audio/05.mp3",
  "./audio/06.mp3",
  "./images/00.jpg",
  "./images/01.jpg",
  "./images/02.jpg",
  "./images/03.jpg",
  "./images/04.jpg",
  "./images/05.jpg",
  "./images/06.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
