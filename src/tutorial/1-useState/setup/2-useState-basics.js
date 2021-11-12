
import React, { useState } from 'react';
// use
// componente name must be uppercase
// must be in the function/componente body
// cannot call conditionally


const UseStateBasics = () => {

	const [text, setText] = useState('Random title');

	const handleClick = () => {
		if (text === 'Random title') {
			setText('Hello world');
		} else {
			setText('Random title');
		}
	};

	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button type="button" className='btn' onClick={handleClick}>
				Change title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
