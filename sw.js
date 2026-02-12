const version = 0.3;
const CACHE_NAME = `mafia-audio-v${version}`;
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./images/head.png",
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
