import configuration from './configuration';
import Logger from "../logger/logger";

export class HtmlService {
  static async getHtml() {
    return fetch(configuration.htmlServiceUrl)
      .then((res) => {
        if (res.ok && res.headers.get('content-type') === 'text/html') {
          return res.text();
        }

        Logger.warning({
          action: 'HtmlService.getHtml',
          error: `Cannot get content from ${res.url}. Status Code: ${res.status}`
        });

        return null;
      })
      .catch((error) => {
        Logger.error({
          action: 'HtmlService.getHtml',
          error
        });

        return null;
      });
  }
}
