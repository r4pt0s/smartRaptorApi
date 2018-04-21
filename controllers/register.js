const validate= require('./validation.js')

const handleRegister = (db, bcrypt) => (req, res) => {

	const {name, email, password}= req.body;

	if(!validate.validateInput(name,'text') ||
	   !validate.validateInput(email,'email') || 
	   !validate.validateInput(password,'text')){
		return res.status(400).json('Fill up the required fields')
	}
	
	const hash= bcrypt.hashSync(password);

	db.transaction(trx =>{
		trx.insert({
			hash: hash,
			email: email
		})
		 .into('login')
		 .returning('email')
		 .then(loginEmail => {
		 	return trx.insert({
				name: name,
				email: loginEmail[0],
				joined: new Date()
			})
			.into('users')
			.returning('*')
			.then(user => {
				res.json(user[0]);
			})
			.catch(err => res.json('error:' + err));
		 })
		 .then(trx.commit)
		 .catch(trx.rollback)
	})
	.catch(err => res.status(400).json('unable to register'));
}

module.exports={
	handleRegister
}