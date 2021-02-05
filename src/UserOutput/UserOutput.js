import React from 'react';

const userOutput = (props) => {
	return (
		<div>
			<p>This is a paragraph about my cats, {props.name1} and {props.name2}. {props.name1} is a fat, dismal creature, who spends most of his time complaining. {props.name2} is a sweet, playful delight, who frequently chatters away.</p>
			<p>My kitties are so cute! I adore them. {props.name1} is a plump and handsome kitty, and {props.name2} is the most adorable kitty in the entire universe</p>
		</div>
	)
}

export default userOutput;
