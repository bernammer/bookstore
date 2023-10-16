const path = require('path');
const rootDir = require('../utils/paths');
const express = require('express');
const router = express.Router();
// const adminRoutes = require('./admin');
const shopController = require('../controllers/shop');

//router get Shop / from product controller
router.get('/', shopController.getIndex);
router.get('/cart', shopController.getCart);
router.post('/cart/:productId', shopController.postCart);
router.get('/products', shopController.getShoppage);
router.get('/products/:productId', shopController.getProduct);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckOut);


//router get Shop /  
/*
router.get('/', (req, res, next) => {
    // console.log('In another middleware');
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true,
        prodsCSS: true
    });
});
*/
module.exports = router;