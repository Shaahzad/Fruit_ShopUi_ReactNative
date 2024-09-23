import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from './src/Screens/HomeScreens';
import Productscreen from './src/Screens/Productscreen';
import Cartscreen from './src/Screens/Cartscreen';


const stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
      <stack.Screen name='Home' component={HomeScreens} options={{headerShown: false}}/>
      <stack.Screen name='Product' component={Productscreen} options={{headerShown: false}}/>
      <stack.Screen name='Cart' component={Cartscreen} options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}