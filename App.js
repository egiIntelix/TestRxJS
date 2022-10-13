import React from 'react';
import { StatusBar } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import MainStackNavigator from './src/Container/Pages';

enableFreeze(true)
export default (props) => {
	return (
		<>
			<StatusBar
				animated={true}
				backgroundColor={'#fff'}
				barStyle={'dark-content'}
				showHideTransition={'fade'}
				hidden={false} />
			<MainStackNavigator
				{...props}
			/>
		</>
	)
};
