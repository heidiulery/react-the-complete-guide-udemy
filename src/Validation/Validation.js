import React from 'react';

const validation = (props) => {
	let message = null;
	if (props.textLength > 5) { 
		message = 'Text is too long'
	}
	return (
		<div>
			<p>{message}</p>
		</div>	
	)
} 

export default validation;
