import {functions} from "../../functions";
import {UrlResolver} from "./urlResolver";
import {Status} from "./status";
import errors from "./errors";

export class RequestHandler {
  private static getFunction(path: string) {
    let functionKey = path;
    const isPathDefined = functions.hasOwnProperty(functionKey);

    if (!isPathDefined) {
      const isCatchAllSelectorDefined = functions.hasOwnProperty('*');

      if (!isCatchAllSelectorDefined) {
        throw Error(errors.INVALID_URL);
      }

      functionKey = '*';
    }

    return functions[(functionKey as keyof typeof functions)];
  }

  private static validateRequest(request: Request, rules: string) {

  }

  static async handle(request: Request) {
    try {
      const path = UrlResolver.getPath(request.url);
      const workerFunction = this.getFunction(path);

      return workerFunction.handler(request);
    } catch (e) {
      return new Response('', {
        status: Status.BAD_REQUEST,
        statusText: e.message,
      });
    }
  }
}
