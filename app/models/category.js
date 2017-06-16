'use strict';

const mongoose = require('mongoose'),
	  Schema = mongoose.Schema;

const CategorySchema = new Schema({
	'name': {
		'type': String,
		'unique': true
	},
	'description': String
});

module.exports = mongoose.model('Category', CategorySchema);