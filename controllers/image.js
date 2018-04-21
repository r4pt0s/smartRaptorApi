const Clarifai= require('clarifai');

const app = new Clarifai.App({
 apiKey: 'YOUR_CLARIFAI_API_KEY_HERE'
});

const handleApiCall= (req,res) =>{

	if(!req.body.inputUrl)
	{
		return res.status(400).json({ 
			info: 'No URL detected',
			status:{
				code: 400
			}
		});
	}else{
		//Face Recognition magic happens here
	    app.models.predict(Clarifai.FACE_DETECT_MODEL, req.body.inputUrl)
	    	.then(data => {
	    		res.json(data);
	    	})
	    	.catch(err => res.status(400).json('error reaching the api'));
	}
}    

const updateEntryCount = (db) => (req, res) =>{
	const {id} = req.body;

	db('users')
		 .where({
			id:id
		})
		 .increment('entries', 1)
		 .returning('entries')
		 .then(entries => {
		 	return res.json(entries[0]);
		 })
		 .catch(err => res.status(400).json('unable to get entries'));	
}

module.exports= {
	updateEntryCount,
	handleApiCall
}