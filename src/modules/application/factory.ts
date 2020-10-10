import {Router} from '../http/router';

class Application {
  private router = new Router();

  async handle(event: FetchEvent) {
    return this.router.handle(event);
  }
}

export default class Factory {
  static create() {
    return new Application();
  }
}
