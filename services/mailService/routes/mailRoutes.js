const express = require('express');
const { newMail } = require('../controller/mailController');

const router = express.Router();

router.post('/newmail',newMail);

module.exports = router;