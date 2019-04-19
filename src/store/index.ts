import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../redux/index';
import { IAuthState } from '../redux/auth/auth.reducer';

export interface IAppState {
	auth: IAuthState;
}

export default function configureStore(): Store<IAppState> {
	let middleware = applyMiddleware(thunk);
	
	if (process.env.NODE_ENV === 'development') {
		middleware = composeWithDevTools(middleware);
	}
	
	const store = createStore(rootReducer, middleware);
	
	if (module.hot) {
		module.hot.accept('../redux', () => {
			const nextReducer = require('../redux/index');
			store.replaceReducer(nextReducer);
		});
	}
	
	return store;
}
