// Tot september 2026 draaide het PlayerPath-platform op playerpath.nl en
// registreerde het daar een service worker. Het platform zit nu op
// app.playerpath.nl. Browsers die de oude worker nog hebben, halen dit bestand
// op als update: het ruimt zichzelf en zijn cache op en laat de site met rust.
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((namen) => Promise.all(namen.map((naam) => caches.delete(naam))))
      .then(() => self.registration.unregister()),
  );
});
