# Smart Raptor face detection API

Project was build while learning at 
[Udemy:The Complete Web Developer in 2018: Zero to Mastery](https://www.udemy.com/the-complete-web-developer-in-2018/learn/v4/overview)

## Used server side techniques
* [NodeJs](https://nodejs.org/en/) 
* [PostgreSQL](https://www.postgresql.org/)

## Used Frameworks & Libaries for Back-End
* [bcrypt-nodejs: Password hash encryption](https://www.npmjs.com/package/bcrypt-nodejs)
	* For password hashing
* [body-parser](https://www.npmjs.com/package/body-parser)
	* Makes it possible to work with requests from client to server over request.body
* [Clarifai API](https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection)
	* Face detection API 
* [cors](https://www.npmjs.com/package/cors)
	* Makes it possible to make cross domain calls. Needed for Clarifai API calls
* [expressJs](http://expressjs.com/de/)
	* Webframework for Node.js
* [knexJs](http://knexjs.org/)
	* Framework to send and handle SQL Queries
		* For further installtion for node.js implementation see [knexJs installation on node](http://knexjs.org/#Installation-node)


For further information about the Front End look at [smartRaptorApi](https://github.com/r4pt0s/smart-raptor).	

Look at [Working demo](https://smart-raptor.herokuapp.com/) deployed at [Heroku](https://www.heroku.com).


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).