'use strict';

/**
 * site-setup service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::site-setup.site-setup');
