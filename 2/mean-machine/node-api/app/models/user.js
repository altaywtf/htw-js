// Grab the packages that we need for the user model
var mongoose 	= require('mongoose'),
	Schema		= mongoose.Schema,
	bcrypt		= require('bcrypt-nodejs');

// Create the user schema
var UserSchema = new Schema({
		name: String,
	username: { type: String, required: true, index: {unique: true}},
	password: { type: String, required: true, select: false }
});

// Hashing the password
UserSchema.pre('save', function(next){
	var user = this;
	
	// hash the password if the password has changed or its just created
	if(!user.isModified('password')) return next();

	// generate the hash
	bcrypt.hash(user.password, null, null, function(err, hash){
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

// Method to compare a given pasword with the DB hash
UserSchema.methods.comparePassword = function(password){
	var user = this;
	return bcrypt.compareSync(password, user.password);
};

// Return the Model
module.exports = mongoose.model('User', UserSchema);