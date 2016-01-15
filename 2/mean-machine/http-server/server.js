var express = require('express'),
	app		= express(),
	path	= require('path');

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'))
});

/**
 * Routers and app.use bindings
 */

/* Admin Router */
var adminRouter = express.Router();

adminRouter.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

adminRouter.get('/', function(req, res){
	res.send('I am the dashboard!');
});

adminRouter.get('/users', function(req, res){
	res.send('I show all the users!');
});

adminRouter.get('/posts', function(req, res){
	res.send('I show all the posts!');
})

app.use('/admin', adminRouter);

/* Hello Router */
var helloRouter = express.Router();

helloRouter.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

helloRouter.param('name', function(req, res, next, name){
	// this is a middleware
	// we can do validations and log/throw something
	/* 
		if(name.length > 0){
		console.log('we\'re good!');} 
	*/
	console.log('doing name validations on '+name);
	req.name = name;
	next();
});

helloRouter.get('/', function(req,res){
	res.send('Hello!')
});

// This router calls the 'name' variable from the middleware that we have defined above
helloRouter.get('/:name', function(req,res){
	res.send('Hello '+ req.name +'!')
});

app.use('/hello', helloRouter);

/**
 * 
 */

app.listen(1337);
console.log('sa, as');