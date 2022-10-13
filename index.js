/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import { Provider as StoreProvider } from 'react-redux';
import configureStore from './src/Config/Redux/store/';

const store = configureStore();

const AppRedux = () => (
	<StoreProvider store={store}>
        <App />
	</StoreProvider>
)

AppRegistry.registerComponent(appName, () => AppRedux);
