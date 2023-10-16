const getDB = require('../utils/databaseMongoDB').getDB;
// const db = require('../utils/databasemysql');
class Product {
    constructor(title, price, description, imageUrl) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;

    };
    save() {
        const db = getDB();
        return db.collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
        // return db.execute(
        //     'INSERT INTO products(title,price,imageUrl,description) VALUES (?,?,?,?) ', [this.title, this.price, this.imageUrl, this.description]
        // );

    };
    static deleteById(id) {

    }
    static fetchAll() {
        // return db.execute('SELECT * FROM products');

        return db.execute(' SELECT * FROM `node-complete`.products;');

    }

    static findById(id) {

    }

};