export class SocialHandler {
  private readonly socials: Social[];
  constructor(socials: Social[]) {
    this.socials = socials;
  }

  element(element: Element) {
    if (!element) {
      return;
    }

    element.setInnerContent('');
    element.removeAttribute('style');

    this.socials.forEach((social) => {
      const linkElement = `<a href="${social.url}" target="_blank">${social.svg}</a>`;
      element.append(linkElement, {
        html: true
      });
    });
  }
}

export type Social = {
  url: string,
  svg: string
}
