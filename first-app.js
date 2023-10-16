// const http = require('http');
// const routes = require('./routes');
//install express first from the terminal npm install --save express;
const path = require('path');
const rootDir = require('./utils/paths');
// const db = require('./utils/databasemysql');
const express = require('express');
const bodyParser = require('body-parser');

// const expressHbs = require('express-handlebars');

const apps = express();
const errController = require('./controllers/error');
const mongoConnect = require('./utils/databaseMongoDB').mongoConnect;

apps.set('view engine', 'ejs');
apps.set('views', 'views');

const adminRoutes = require('./routes/admin');
// const shopRouter = require('./routes/shop');
// db.execute('SELECT * FROM products;').then(
//     result => {
//         console.log(result[0]);
//     }
// ).catch(
//     err => {
//         console.log(err);
//     }
// );
// db.execute('SELECT * FROM products');
apps.use(bodyParser.urlencoded({ extended: false }));
apps.use(express.static(path.join(__dirname, 'public')));
apps.use((req, res, next) => {
    next();
});

apps.use('/admin', adminRoutes);
// apps.use(shopRouter);

apps.use(errController.get404page);

mongoConnect(() => {
    // console.log(client);
    apps.listen(3000);
});

// const server = http.createServer(apps);
// server.listen(3000);