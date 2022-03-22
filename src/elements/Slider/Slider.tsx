import * as React from 'react';

import SliderStyled from './SliderStyled';

interface SliderProps {
	children?: any;
	[propName: string]: {};
}

const Slider: React.FC<SliderProps> = (props) => (
	<SliderStyled type="range"  {...props} />
);

export default Slider;
