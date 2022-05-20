const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb+srv://mongo_db:3314himanshu@cluster0.xc5bv.mongodb.net/vueDB?retryWrites=true&w=majority'
db.users = require("./model")(mongoose);

module.exports = db;