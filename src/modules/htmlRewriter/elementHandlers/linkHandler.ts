export class LinkHandler {
  private readonly links: Link[];
  constructor(links: Link[]) {
    this.links = links;
  }

  element(element: Element) {
    if (!element) {
      return;
    }

    element.setInnerContent('');

    this.links.forEach((link) => {
      const linkElement = `<a href="${link.url}" target="_blank">${link.name}</a>`;
      element.append(linkElement, {
        html: true
      });
    });
  }
}

export type Link = {
  name: string,
  url: string
}
