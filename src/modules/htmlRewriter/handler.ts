import {HtmlService} from "./services";
import {Status} from "../http/status";
import {LinksService} from "../links/services";
import {HtmlTransformer} from "./htmlTransformer";
import profile from "../configuration/profile";
import Logger from "../logger/logger";
import social from "../configuration/social";
import document from "../configuration/document";

export class HTMLRewriterHandler {
  static async rewriteHtml(request: Request) {
    const html = await HtmlService.getHtml();

    if (!html) {
      return new Response('', {
        status: Status.BAD_GATEWAY
      });
    }

    try {
      const links = LinksService.getLinks();
       return HtmlTransformer
                .addLinks(JSON.parse(links))
                .addProfile(profile)
                .addSocial(social)
                .addDocument(document.title, document.backgroundColorClass)
                .transform(html);
    } catch (error) {
      Logger.error({
        action: 'HTMLRewriterHandler.rewriteHtml',
        error
      })
    }

    return new Response('', {
      status: Status.INTERNAL_SERVER_ERROR
    });
  }
}
