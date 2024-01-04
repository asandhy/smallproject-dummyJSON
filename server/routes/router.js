
const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.home);

/**
 *  @description add product
 *  @method GET /add-prod
 */
route.get('/add-prod', services.add_prod)

// API
route.post('/api/prod', controller.create);
route.get('/api/prod', controller.find);

module.exports = route