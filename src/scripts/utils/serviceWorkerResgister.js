import * as WorkboxWindow from 'workbox-window';

const serviceWorkerRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return console.log('Service Worker tidak didukung pada browser ini');
  }

  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  try {
    await wb.register();
    return console.log('Service worker berhasil didaftarkan');
  } catch (err) {
    return console.log('Gagal mendaftarkan service worker dengan error sebagai berikut', err);
  }
};

export default serviceWorkerRegister;
