// Copyright (c) 2019-2022 The Gim.Cool developers
// All Rights Reserved.
// NOTICE: All information contained herein is, and remains
// the property of Gim.Cool and its suppliers,
// if any. The intellectual and technical concepts contained
// herein are proprietary to Gim.Cool
// Dissemination of this information or reproduction of this materia
// is strictly forbidden unless prior written permission is obtained
// from Gim.Cool.

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'wallet-api-mock-server' });
});

module.exports = router;
