import * as React from 'react';

import CheckboxStyled from './CheckboxStyled';

interface CheckboxProps {
	children?: any;
	[propName: string]: {};
}

const Checkbox: React.FC<CheckboxProps> = (props) => (
	<CheckboxStyled type="checkbox"  {...props} />
);

export default Checkbox;
