const Product = require('../models/product');
const Cart = require('../models/cartfromfile');
//products page rendering 
exports.getShoppage = (req, res, next) => {
    // Product.fetchAll(products => {
    //     res.render('shop/product-list', {
    //         prods: products,
    //         pageTitle: 'All Products',
    //         path: '/products',
    //         // hasProducts: products.length > 0,
    //         // activeShop: true,
    //         // prodsCSS: true
    //     });
    // });
    Product.fetchAll().then(([rows, fieldData]) => {
        res.render('shop/product-list', {
            prods: rows,
            pageTitle: 'All Products',
            path: '/products',
            // hasProducts: products.length > 0,
            // activeShop: true,
            // prodsCSS: true
        });
    }).catch(err => console.log(err));
};
exports.getProduct = (req, res, next) => {
    const productID = req.params.productId;
    // console.log(typeof productID);
    Product.findById(productID, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        });
    });
};
exports.getIndex = (req, res, next) => {
    Product.fetchAll().then(([rows, fieldData]) => {
        res.render('shop/index', {
            prods: rows,
            pageTitle: 'Shop',
            path: '/'
        });
    }).catch(err => { console.log(err) });

};
exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your cart'
    });
};
exports.postCart = (req, res, next) => {
    // const prodId = req.body.productId;
    const productID = req.params.productId;
    // console.log(typeof prodId);
    Product.findById(productID, product => {
        // console.log(product);
        Cart.addProduct(product.id, product.price);
    });
};
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};
exports.getCheckOut = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};