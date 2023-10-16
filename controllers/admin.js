const Product = require('../models/product');

// exports.getProductsadminpage = (req, res, next) => {
//     const products = Product.fetchAll(products => {
//         res.render('admin/products.ejs', {
//             prods: products,
//             pageTitle: 'productsAdminPage',
//             path: '/',
//             hasProducts: products.length > 0,
//             activeShop: true,
//             prodsCSS: true
//         });
//     });
// };

exports.getAddProductPage = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add-Product',
        path: '/admin/add-product',
        editing: false
            // formsCSS: true,
            // prodsCSS: true,
            // activeAddProduct: true
    });
};

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, price, description, imageUrl);
    product.save().then(result => {
            console.log('created a Product!');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
        })
        // product.save();
    res.redirect('/');
};

// exports.getEditProductPage = (req, res, next) => {
//     const editMode = req.query.edit;
//     if (!editMode) {
//         return res.redirect('/');
//     }
//     const productId = req.params.productId;
//     Product.findById(productId, product => {
//         if (!product) res.render('/');
//         else
//             res.render('admin/edit-product', {
//                 pageTitle: 'Edit-Product',
//                 path: '/admin/edit-product',
//                 editing: editMode,
//                 product: product,
//             });
//     });
// };
// exports.postEditProduct = (req, res, next) => {
//     const productId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedPrice = req.body.price;
//     const updatedDescription = req.body.description;
//     const updatedProduct = new Product(productId, updatedTitle, updatedImageUrl, updatedPrice, updatedDescription);
//     updatedProduct.save().then(() => {
//         res.redirect('/admin/products');
//     }).catch(err => console.log(err));


// };
// exports.postDeleteProduct = (req, res, next) => {
//     const productId = req.body.porductId;
//     Product.deleteById(productId);
//     res.redirect('/admin/products');

// };
// exports.getProducts = (req, res, next) => {
//     const products = Product.fetchAll(products => {
//         res.render('admin/products', {
//             prods: products,
//             pageTitle: 'Admin Products',
//             path: '/admin/products',
//         });
//     });
// };