'use strict';

const mongoose= require('mongoose'),
	  Schema = mongoose.Schema;

const ProductSchema = new Schema({
	'name': {
		'type': String,
		'unique': true
	},
	'description': String,
	'price': Number,
	'category': {
		'type': Schema.Types.ObjectId,
		'ref': 'category'
	}
});

ProductSchema.index({
	'name': 1,
	'category': 1
});

module.exports = mongoose.model('Product', ProductSchema);