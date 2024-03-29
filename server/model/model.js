
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
        unique: true
    },
    price : {
        type: Number,
        required: true
    },
    stock : {
        type: Number,
        required: true
    },	
    rating : {
        type: Number
    },
	image : String
})

const Goods = mongoose.model('goods', schema);

module.exports = Goods;