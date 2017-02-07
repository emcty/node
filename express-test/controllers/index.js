'use strict';
const router = require('express').Router();
require("./restful")(router);
require("./form")(router);
module.exports = router;