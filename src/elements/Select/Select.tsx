import * as React from 'react';

import SelectStyled from './SelectStyled';

interface SelectProps {
	children?: any;
	[propName: string]: {};
}

const Select: React.FC<SelectProps> = ({ children, ...props }) => (
	<SelectStyled {...props}>{children ? children : ""}</SelectStyled>
);

export default Select;
