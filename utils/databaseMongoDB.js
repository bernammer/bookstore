const mongoDB = require('mongodb');
const mongoDBClient = mongoDB.MongoClient;
let _db;
const mongoConnect = callback => {
    mongoDBClient.connect('mongodb+srv://shawelbernabas:passw0rd@cluster0.f95einy.mongodb.net/?retryWrites=true&w=majority')
        .then(client => {
            console.log('Succesfully connected with mongodb cluster');
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};
const getDB = () => {
    if (_db) {
        return _db;
    }
    throw 'No database Found!';
};
exports.mongoConnect = mongoConnect;
exports.getDB = getDB;