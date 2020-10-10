import {LinksService} from "./services";

export class LinksHandler {
  static async getLinks(request: Request) {
    return new Response(LinksService.getLinks(), {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    });
  }
}
