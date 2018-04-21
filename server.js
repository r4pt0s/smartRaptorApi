const express= require('express');
const bodyParser = require('body-parser');
const bcrypt= require('bcrypt-nodejs');
const cors= require('cors');
const db = require('knex')({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
  	ssl: true,
  }
});

//importing own coded controllers
const signin= require('./controllers/signin');
const profile= require('./controllers/profile');
const register= require('./controllers/register');
const image= require('./controllers/image');

const app= express();
const PORT= process.env.PORT ? process.env.PORT : 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req,res) => { res.json('WELCOME') });

app.post('/signin', signin.handleSignin(db, bcrypt));//passes automatically (req,res)
//Do it the other way
//app.post('/signin', (req,res) => { signin.handleSignin(req,res, db,bcrypt)});

app.post('/register', register.handleRegister(db,bcrypt)); //passes automatically (req,res)
//Do it the other way
//app.post('/register', (req,res) => { register.handleRegister(req,res, db,bcrypt)});

app.get('/profile/:id', profile.handleGetProfile(db));//passes automatically (req,res)
//Do it the other way
//app.get('/profile/:id', (req,res) => { profile.handleGetProfile(req, res, db)});


app.put('/image', image.updateEntryCount(db));//passes automatically (req,res)
//Do it the other way
//app.put('/image', (req,res) => { image.updateEntryCount(req, res, db)});

app.post('/imageurl', image.handleApiCall);
//Do it the other way
//app.put('/imageurl', (req,res) => { image.handleApiCall(req, res)});


app.listen(PORT, () =>{
	console.log(`Server is running at port ${PORT}`);
})