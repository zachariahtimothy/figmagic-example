import * as React from 'react';

import InputStyled from './InputStyled';

interface InputProps {
	children?: any;
	[propName: string]: {};
}

const Input: React.FC<InputProps> = (props) => (
	<InputStyled type="text" placeholder="Placeholder text" {...props} />
);

export default Input;
