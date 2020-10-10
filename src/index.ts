import ApplicationFactory from './modules/application/factory';

const app = ApplicationFactory.create();
addEventListener('fetch', (event) => {
  event.respondWith(app.handle(event));
});
