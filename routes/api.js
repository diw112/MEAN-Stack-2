const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
    res.send("Api work");
});

const user = require('../controllers/user.controller');
router.route('/user').get(user.list);

module.exports = router;