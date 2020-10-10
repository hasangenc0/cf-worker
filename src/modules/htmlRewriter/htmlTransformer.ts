import {Link, LinkHandler} from "./elementHandlers/linkHandler";
import {Profile, ProfileHandler} from "./elementHandlers/profileHandler";
import {Social, SocialHandler} from "./elementHandlers/socialHandler";
import {DocumentHandler} from "./elementHandlers/documentHandler";

export class HtmlTransformer {
  private static rewriter = new HTMLRewriter();

  static transform(html: string): Response {
    return this.rewriter.transform(new Response(html, {
      headers: {
        'content-type': 'text/html'
      }
    }));
  }

  static addLinks(links: Link[] ) {
    this.rewriter.on('div#links', new LinkHandler(links));
    return this;
  }

  static addProfile(profile: Profile) {
    const handler = new ProfileHandler(profile);
    this.rewriter
      .on('div#profile', handler)
      .on('img#avatar', handler)
      .on('h1#name', handler);
    return this;
  }

  static addSocial(socials: Social[]) {
    const handler = new SocialHandler(socials);
    this.rewriter.on('div#social', handler);
    return this;
  }

  static addDocument(title: string, backgroundColorClass: string) {
    const handler = new DocumentHandler(title, backgroundColorClass);
    this.rewriter
      .on('title', handler)
      .on('body', handler);

    return this;
  }
}
