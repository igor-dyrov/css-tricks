import * as React from 'react';

import ContainerWrapper from '../ContainerWrapper/ContainerWrapper';
import './Loading.scss';

export default class Loading extends React.Component {
	public render(): JSX.Element {
		return (
			<ContainerWrapper>
				<div className='loader'/>
			</ContainerWrapper>
		);
	}
	
	public componentDidMount() {
		document.getElementById('root').style['background-color'] = '#522580';
	}
	
	public componentWillUnmount() {
		document.getElementById('root').style['background-color'] = 'white';
	}
};
