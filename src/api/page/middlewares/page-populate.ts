/**
 * `page-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  blocks: {
    on: {
      "blocks.hero": {
        populate: {
          links: true,
          image: { fields: ["alternativeText", "url"] }
        }
      },
      "blocks.section-heading": true,
      "blocks.card-grid": {
        populate: { cards: true }
      },
      "blocks.content-with-image": {
        populate: {
          link: true,
          image: { fields: ["alternativeText", "url"] }
        }
      },
      "blocks.markdown": true,
      "blocks.person-card": {
        populate: { image: { fields: ["alternativeText", "url"] } }
      },
      "blocks.faq": {
        populate: { faqs: true }
      },
      "blocks.newsletter": true
    }
  }
};

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx: any, next: any) => {
    ctx.query.populate = populate;
    console.dir(ctx.query, { depth: null });
    strapi.log.info('In page-populate middleware.');

    await next();
  };
};
