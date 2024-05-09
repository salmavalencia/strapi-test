'use strict';

/**
 * `landing-page-populate` middleware
 */

const populate = {
  metadata: {
    populate: {
      metaImage: {
        populate: true,
        fields: ["name", "alternativeText", "url"]
      }
    }
  },
  blocks: {
    populate: {
      link: {
        populate: true
      },
      image: {
        fields: ["name", "alternativeText", "url"]
      },
      form: {
        populate: ["input", "button"]
      },
      plan: {
       populate: ["services", "link"]
      },
      card: {
        populate: {
          image: {
            fields: ["name", "alternativeText", "url"]
          }
        }
      }
    },
  },
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query = {
      populate,
      ...ctx.query
    }
    await next();
  };
};
