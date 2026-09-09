/**
 * `article-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  featuredImage: { fields: ["alternativeText", "url"] },
  author: {
    populate: {
      image: { fields: ["alternativeText", "url"] },
      articles: { fields: ["documentId", "title"] }
    }
  },
  contentTags: true
};

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx: any, next: any) => {
    ctx.query.populate = populate;
    console.dir(ctx.query, { depth: null });
    strapi.log.info('In article-populate middleware.');

    await next();
  };
};
