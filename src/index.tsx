import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/index';
import history from './middleware/history/history.js';
import App from './containers/App/App';
import { routes } from './routes';

import './static/scss/reset.scss';
import './static/scss/mobile.scss';

const store = configureStore();

const render = (component) => {
	ReactDOM.render(
		(
			<AppContainer>
				<Provider store={store}>
					<Router history={history}>
						{component}
					</Router>
				</Provider>
			</AppContainer>
		),
		document.getElementById('root'));
};

render(<App routes={routes}/>);

if (module.hot) {
	module.hot.accept('./containers/App/App.tsx', () => {
		render(<App routes={routes}/>);
	});
}
