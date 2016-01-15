
/* Call the Packages! ----------------- */
var express 	= require('express'),
	app			= express(),
	bodyParser 	= require('body-parser'),
	morgan		= require('morgan'),
	mongoose	= require('mongoose'),
	port		= process.env.PORT || 8080,
	User  	 	= require('./app/models/user');
/* ------------------------------------ */


/* Database Connection ---------------- */
mongoose.connect('mongodb://localhost:27017/node-api');
/* ------------------------------------ */


/* App Configuration ------------------ */
// We're using body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configuring the app to handle CORS requests
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

// Logging all requests to the console with morgan
app.use(morgan('dev'));
/* ------------------------------------ */


/* Routes for our API ----------------- */
// Home Page Router
app.get('/', function(req, res){
	res.send('Welcome to the home paage!');
});

// Create the API Router by using Express
var apiRouter = express.Router();

// Create a middleware to use for all requests
apiRouter.use(function(req, res, next){
	console.log('Somebody just came to our app!');
	// We'll add more to the middleware in Ch10
	// this is where we'll authenticate users
	next();
})

// Router for Homepage of API
apiRouter.get('/', function(req, res){
	res.json({message: 'hooray! welcome to our api!'});
});

// Router for Users
apiRouter.route('/users')
	// Create a user (accessed at POST http://localhost:8080/api/users)
	.post(function(req, res) {

		// Create a new instance of User model
		var user = new User();

		user.name 		= req.body.name;
		user.username 	= req.body.username;
		user.password	= req.body.password;

		// Save the user and check the errors
		user.save(function(err){
			if(err){
				if(err.code == 11000)
					return res.json({success: false, message: 'A user with that username already exists.'});
				else
					return res.send(err);
			}

			res.json({message: 'User created!'});
		});
	})

	// Get all the users (accessed at GET http://localhost:8080/api/users)
	.get(function(req, res){
		User.find(function(err, users){
			if (err) res.send(err);

			res.json(users);
		});
	});

// Router for a Single User
apiRouter.route('/users/:user_id')
	// Get the user and view its information (accessed at GET http://localhost:8080/api/users/:user_id)
	.get(function(req, res){
		User.findById(req.params.user_id, function(err, user){
			if(err) res.send(err);
			res.json(user);
		});
	})

	// Update the user (accessed at PUT http://localhost:8080/api/users/:user_id)
	.put(function(req, res){
		User.findById(req.params.user_id, function(err, user){
			
			if (err) res.send(err);

			// update the users information only if it's NEW
			if (req.body.name) 		user.name 		= req.body.name;
			if (req.body.username)	user.username 	= req.body.username;
			if (req.body.password)	user.password	= req.body.password;

			// save the user
			user.save(function(err){
				if (err) res.send(err);
				res.json({message: 'User updated!'});
			});

		});
	})

	// Delete the user (accessed at DELETE http://localhost:8080/api/users/:user_id)
	.delete(function(req, res){
		User.remove( 
			{ _id: req.params.user_id},
			function(err, user) {
				if (err) res.send(err);
				res.json({message: 'User deleted!'});
			});
	});

// Registering the Routes
app.use('/api', apiRouter);
/* ------------------------------------ */


/* Start the SERVER ------------------- */
app.listen(port);
console.log('Magic happens on port ' + port);
/* ------------------------------------ */