const { Router} = require("express");
const routerIndex = Router();
const renderIndex = require('../controllers/index');



routerIndex.get('/', renderIndex);

module.exports = routerIndex;