import * as React from 'react';

import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';
import './Loading.scss';

export default function Loading() {
	return (
		<ContainerWrapper>
			<div className='loader'>Loading...</div>
		</ContainerWrapper>
	);
}
