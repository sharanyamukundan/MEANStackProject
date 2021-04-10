const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Reviews');
const Schema = mongoose.Schema;
var ReviewSchema = new Schema({
    filmName: String,
     filmYear: Number,
     filmLanguage: String,
     filmGenre: String,
     filmRating: Number,
     filmDesc: String,
     filmImage: String
});
var Reviewdata = mongoose.model('review',ReviewSchema);
module.exports  = Reviewdata;