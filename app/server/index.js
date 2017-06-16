'use strict';

const http = require('http'),
	  express = require('express'),
	  bodyParser = require('body-parser'),
	  app = express(),
	  Product = require('../models/product'),
	  Category = require('../models/category');

app.use(bodyParser.json({
	'extended': true
}));

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
	console.log('Application up and running on', process.env.PORT);
});

app.get('/products', (req, res) => {
	Product
	.find({})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	});
});

app.get('/products/:id', (req, res) => {
	Product
	.findOne({'_id': req.params.id})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.post('/products', (req, res) => {
	new Product(req.body.product)
	.save()
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.put('/products/:id', (req, res) => {
	Product
	.findOneAndUpdate({
		'_id': req.params.id
	}, {
		'$set': req.body.product
	}, {
		'new': true
	})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.delete('/products/:id', (req, res) => {
	Product
	.remove({'_id': req.params.id})
	.then(() => {
		res.status(200).json({'message': 'Product deleted.'});
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

//Category

app.get('/categories', (req, res) => {
	Category
	.find({})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	});
});

app.get('/categories/:id', (req, res) => {
	Category
	.findOne({'_id': req.params.id})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.post('/categories', (req, res) => {
	new Category(req.body.category)
	.save()
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.put('/categories/:id', (req, res) => {
	Category
	.findOneAndUpdate({
		'_id': req.params.id
	}, {
		'$set': req.body.category
	}, {
		'new': true
	})
	.then(data => {
		res.status(200).json(data);
	})
	.catch(e => {
		res.status(500).json(e);
	})
});

app.delete('/categories/:id', (req, res) => {
	Category
	.remove({'_id': req.params.id})
	.then(() => {
		res.status(200).json({'message': 'Product deleted.'});
	})
	.catch(e => {
		res.status(500).json(e);
	})
});