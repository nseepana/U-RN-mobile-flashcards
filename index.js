/**
 * @format
 */
import React from 'react';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { appReducer, initialState } from './store/reduxHelper'
import { createStore } from 'redux';

const store = createStore(appReducer, initialState);

const RNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);