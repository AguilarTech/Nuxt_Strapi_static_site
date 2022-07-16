'use strict';

/**
 * site-setup router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::site-setup.site-setup');
