var mongoose = require('mongoose');

mongoose.connect("mongodb://mongoTest:optionop25@ds055822.mongolab.com:55822/monsters");

var db = mongoose.connection;

db.on('error', function(error){
    console.log("WARNING ! ***** DB connection error *****");
    console.log(error);
});

db.on('open', function(){
    console.log("***** DB connection OK *****");
});

exports.mongoose = mongoose;