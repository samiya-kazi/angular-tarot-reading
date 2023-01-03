const router = require('express').Router();
const cardController = require('./controllers/card');

router.get('/cards', cardController.getAllCards);
router.get('/cards/:id', cardController.getOneCard);

module.exports = router;