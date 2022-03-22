import * as React from 'react';

import H2Styled from './H2Styled';

interface H2Props {
	children: any;
	[propName: string]: {};
}

const H2: React.FC<H2Props> = ({ children, ...props }) => (
	<H2Styled {...props}>{children ? children : "H2 Heading Medium"}</H2Styled>
);

export default H2;
