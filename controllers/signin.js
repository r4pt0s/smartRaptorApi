const validate= require('./validation');

const handleSignin = (db,bcrypt) => (req, res) => {
	const {email, password}= req.body;

	if(!validate.validateInput(email,'email') || 
	   !validate.validateInput(password,'text')){
		return res.status(400).json('wrong Email and/or Password combination validate')
	}


	db.select('email', 'hash')
	  .from('login')
	  .where('email', '=', email)
	  .then(data => {
	  	const isValid= bcrypt.compareSync(password, data[0].hash);

	  	if(isValid){
	  		return db.select('*')
	  		  .from('users')
	  		  .where('email','=', data[0].email)
	  		  .then(user => {
	  		  	res.json(user[0]);	  		  	
	  		  })
	  		  .catch(err => res.status(400).json('unable to get user'));
	  	}else{
	  		res.status(400).json('wrong Email and/or Password combination');
	  	}
	  })
	  .catch(err => res.status(400).json('wrong Email and/or Password combination'));
}

module.exports={
	handleSignin
}