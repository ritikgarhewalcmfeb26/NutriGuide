const express = require('express');
const router = express.Router();
const mealController = require('../controllers/mealController');
const { verifyToken } = require('../middlewares/auth');

router.post('/', verifyToken, mealController.logMeal);
router.get('/daily', verifyToken, mealController.getDailyMeals);

module.exports = router;
