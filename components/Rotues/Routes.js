import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Screen3 from '../Screens/Screen3';
import Screen4 from '../Screens/Screen4';


const Stack = createNativeStackNavigator(); 
const Routes = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName="Personal-Info">
                <Stack.Screen name="Personal-Info" component={Screen1} />
                <Stack.Screen name="Select-Plan" component={Screen2} />
                <Stack.Screen name="Add-On" component={Screen3} />
                <Stack.Screen name="Finishing-Up" component={Screen4} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes