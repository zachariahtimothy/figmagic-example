import * as React from 'react';

import H6Styled from './H6Styled';

interface H6Props {
	children?: any;
	[propName: string]: {};
}

const H6: React.FC<H6Props> = ({ children, ...props }) => (
	<H6Styled {...props}>{children ? children : "H6 Body Medium"}</H6Styled>
);

export default H6;
