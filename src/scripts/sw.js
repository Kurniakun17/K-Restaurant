import { precacheAndRoute } from 'workbox-precaching';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('push', () => {
});
