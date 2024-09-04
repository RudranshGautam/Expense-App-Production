// routes/expenseRoutes.js
const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/auth/login');
}

router.get('/', isAuthenticated, expenseController.getExpensePage);
router.post('/add', isAuthenticated, expenseController.addExpense);
router.get('/delete/:id', isAuthenticated, expenseController.deleteExpense);
router.get('/buy-premium', isAuthenticated, (req, res) => {
    res.send('Premium feature coming soon!');
});

module.exports = router;
