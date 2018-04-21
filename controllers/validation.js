const validateInput= (input, type= 'text') =>{

	let isValid= false;

	switch(type)
	{
		case 'text':
			if(input !== ''){
				isValid= true;
			}
			break;
		case 'email':
			if(input.includes('@') && input !== ''){
				if(input.endsWith('.com') ||
				   input.endsWith('.at') ||
				   input.endsWith('.de')){
					isValid=true;
				}
			}
	}

	return isValid;

}

module.exports={
	validateInput
}