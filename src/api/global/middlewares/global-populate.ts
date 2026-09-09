/**
 * `global-populate` middleware
 */

import type { Core } from '@strapi/strapi';

const populate = {
  banner: { populate: { link: true } },
  header: {
    populate: {
      logo: {
        populate: {
          image: { fields: ["alternativeText", "url"] }
        }
      },
      navItems: true,
      cta: true
    }
  },
  footer: {
    populate: {
      logo: {
        populate: {
          image: { fields: ["alternativeText", "url"] }
        }
      },
      navItems: true,
      socialLinks: {
        populate: { image: { fields: ["alternativeText", "url"] } }
      }
    }
  }
};

export default (config: any, { strapi }: { strapi: Core.Strapi }) => {
  // Add your own logic here.
  return async (ctx: any, next: any) => {
    ctx.query.populate = populate;
    console.dir(ctx.query, { depth: null });
    strapi.log.info('In global-populate middleware.');

    await next();
  };
};
