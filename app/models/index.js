'use strict';

const mongoose = require('mongoose'),
	  connect = () => {
		mongoose.connect(`${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`);
	  };

mongoose.Promise = require('bluebird');

connect();

mongoose.connection.on('connected', () => {
	console.log('MongoDB connected on', `${process.env.MONGO_HOST}/${process.env.MONGO_SCHEMA}`);
});

mongoose.connection.on('disconnected', () => {
	connect();
})

mongoose.connection.on('error', err => {
	console.log(err)
});
