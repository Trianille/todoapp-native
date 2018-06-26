import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import Main from './app/components/Main';
import rootReducer from './app/reducers';

const store = createStore(rootReducer, devToolsEnhancer());

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		);
	}
}
