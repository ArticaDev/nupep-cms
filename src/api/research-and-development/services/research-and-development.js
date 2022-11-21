'use strict';

/**
 * research-and-development service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::research-and-development.research-and-development');
