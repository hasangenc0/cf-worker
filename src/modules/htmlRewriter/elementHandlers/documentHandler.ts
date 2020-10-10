export class DocumentHandler {
  private readonly title: string;
  private readonly backgroundColorClass: string;
  constructor(title: string, backgroundColorClass: string) {
    this.title = title;
    this.backgroundColorClass = backgroundColorClass;
  }

  element(element: Element) {
    if (!element) {
      return;
    }

    switch (element.tagName) {
      case 'title':
        this.transformTitle(element);
        break;
      case 'body':
        this.transformBody(element);
        break;
      default: break;
    }
  }

  transformTitle(element: Element) {
    element.setInnerContent(this.title);
  }

  transformBody(element: Element) {
    element.setAttribute('class', this.backgroundColorClass);
  }
}
