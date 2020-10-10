import errors from './errors';

export class UrlResolver {
  static getPath(urlString: string) {
    try {
      const url = new URL(urlString);
      return UrlResolver.clearPath(url.pathname);
    } catch (e) {
      throw Error(errors.INVALID_URL);
    }
  }

  private static clearPath(path: string): string {
    let cleanPath = path.trim().toLowerCase();
    const shouldRemoveLastCharacter = cleanPath.lastIndexOf('/') === cleanPath.length - 1;

    if (shouldRemoveLastCharacter) {
      cleanPath = cleanPath.slice(0, -1);
    }

    return cleanPath;
  }
}
