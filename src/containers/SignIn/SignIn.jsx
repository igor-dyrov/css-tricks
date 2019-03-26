import * as React from 'react';

import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import ContainerWrapper from '../../components/ContainerWrapper/ContainerWrapper.js';

class SignIn extends React.Component {
	render() {
		return (
			<ContainerWrapper>
				<Header/>
				<Footer/>
			</ContainerWrapper>
		);
	}
}

export default SignIn;
