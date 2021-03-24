
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API com Docker",
        version: "1.0.1"
    });
});

module.exports = router;
