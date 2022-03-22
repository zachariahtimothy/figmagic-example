import * as React from 'react';

import H4Styled from './H4Styled';

interface H4Props {
	children: any;
	[propName: string]: {};
}

const H4: React.FC<H4Props> = ({ children, ...props }) => (
	<H4Styled {...props}>{children ? children : "H4 Heading Extra Small"}</H4Styled>
);

export default H4;
