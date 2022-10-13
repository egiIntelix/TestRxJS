
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '../../Config/';
import Home from './Home';
import Example from './Example';


const Stack = createNativeStackNavigator();

const animationSlide = {
    headerMode: 'none',
    headerShown: false,

}
export default stackProps => (
    <NavigationContainer
        ref={navigationRef}
        onReady={() => { 
            console.log('Root Props : ', stackProps) 
        }}>
        <Stack.Navigator
            initialRouteName={"Home"}
            mode={"card"}
            ScreenOptions={{}}>
            <Stack.Screen name="Home" options={() => (animationSlide)}>
                {props => <Home {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Example" options={() => (animationSlide)}>
                {props => <Example {...props} {...stackProps} />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
);