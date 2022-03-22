import * as React from 'react';

import H5Styled from './H5Styled';

interface H5Props {
	children: any;
	[propName: string]: {};
}

const H5: React.FC<H5Props> = ({ children, ...props }) => (
	<H5Styled {...props}>{children ? children : "H5 Body Large"}</H5Styled>
);

export default H5;
