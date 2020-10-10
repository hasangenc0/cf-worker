import { LinksHandler } from './modules/links/handler';
import {HTMLRewriterHandler} from "./modules/htmlRewriter/handler";

export const functions = {
  '/links': {
    path: '/links',
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    },
    handler: LinksHandler.getLinks
  },
  '*': {
    path: '*',
    method: 'GET',
    handler: HTMLRewriterHandler.rewriteHtml
  }
};
