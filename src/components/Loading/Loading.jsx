import * as React from 'react';

import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';
import './Loading.css';

export default function Loading() {
	return (
		<ContainerWrapper>
			<div className='loader'>Loading...</div>
		</ContainerWrapper>
	);
}
