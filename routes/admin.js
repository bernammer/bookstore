const path = require('path');
const rootDir = require('../utils/paths');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();


//  /admin/add-product => GET
router.get('/add-product', adminController.getAddProductPage);

// /admin/products => GET
// router.get('/products', adminController.getProducts);
// /admin/edit
// router.get('/edit-product/:productId', adminController.getEditProductPage);
// router.post('/edit-product', adminController.postEditProduct)
//router post product /admin/add-product/  from product controller
router.post('/add-product', adminController.postProduct);
// router.post('/delete-product', adminController.postDeleteProduct);
// router.get('/edit-product/', adminController.getAddProductPage);
//router GET product /admin/products
//GET admin/products 
// router.get('/products/', adminController.getAddProductPage);

//GET /admin/product


//router get product /admin/add-product/
/*
router.get('/add-product/', (req, res, next) => {
    res.render('add-product.ejs', {
        pageTitle: 'Add-Product',
        path: '/admin/add-product',
        formsCSS: true,
        prodsCSS: true,
        activeAddProduct: true

    });
});
*/


//router post product /admin/add-product/
/*
router.post('/add-product', (req, res, next) => {
    // console.log(req.body.title);
    products.push({ title: req.body.title });
    res.redirect('/');
});
*/
// exports.routes = router;
// exports.products = products;
module.exports = router;