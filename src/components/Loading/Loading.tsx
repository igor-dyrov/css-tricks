import * as React from 'react';

import ContainerWrapper from '../ContainerWrapper/ContainerWrapper';
import './Loading.scss';

export default function Loading() {
	return (
		<ContainerWrapper>
			<div className='loader'/>
		</ContainerWrapper>
	);
}
