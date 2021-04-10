const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Suggest');
const Schema = mongoose.Schema;
var SuggSchema = new Schema({
    name:String,
    year:Number,
    language:String,
    genre:String
});
var Suggdata = mongoose.model('suggest',SuggSchema);
module.exports  = Suggdata;