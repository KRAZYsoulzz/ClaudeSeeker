
const BUILD_ID = "v3014-3014";
const CACHE_PREFIX = "seeker-cache-";
const CACHE_NAME = CACHE_PREFIX + BUILD_ID;
const OFFLINE_URL = "offline.html";
const CORE_ASSETS = ["./","./?","index.html","offline.html","style.v43.css","print.css","main.v43.js","manifest.json","icons/icon-192.png","icons/icon-512.png"];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CORE_ASSETS)).catch(()=>null));
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    try {
      const keys = await caches.keys();
      await Promise.all(keys.map(k => (k.startsWith(CACHE_PREFIX) && k !== CACHE_NAME) ? caches.delete(k) : Promise.resolve()));
      if (self.clients && self.clients.claim) await self.clients.claim();
    } catch (e) {  }
  })());
});

function stripQS(request){
  try {
    const url = new URL(request.url); url.search = "";
    return new Request(url.toString(), { headers: request.headers, method: request.method, mode: request.mode, credentials: request.credentials, cache: "no-store", redirect: request.redirect, referrer: request.referrer, referrerPolicy: request.referrerPolicy, integrity: request.integrity });
  } catch(_){
    return request;
  }
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const accept = req.headers.get("accept") || "";

  if (req.mode === "navigate" || accept.includes("text/html")) {
    event.respondWith((async () => {
      try {
        const net = await fetch(req, { cache: "reload" });
        const cache = await caches.open(CACHE_NAME);
        cache.put(stripQS(req), net.clone()).catch(()=>{});
        return net;
      } catch(_){
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(stripQS(stripQS(req));
        return cached || cache.match(stripQS(OFFLINE_URL);
      }
    })());
    return;
  }

  if (/\.(css|js|png|jpg|jpeg|webp|svg|ico|json|woff2?)($|\?)/i.test(new URL(req.url).pathname) || /application\/javascript|text\/css|image\
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(stripQS(stripQS(req));
      const fetchPromise = fetch(event.request).then((net) => { cache.put(stripQS(req), net.clone()).catch(()=>{}); return net; }).catch(()=>null);
      return cached || (await fetchPromise) || new Response("", {status: 504});
    })());
  }
});
