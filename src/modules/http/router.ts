import {RequestHandler} from "./requestHandler";

export class Router {
  async handle(event: FetchEvent):Promise<Response> {
    return RequestHandler.handle(event.request);
  }

}

export interface Route {
  method: string;
  handler: (...args: any) => Response | Promise<Response>;
}
