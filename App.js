import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Indexx from './screens/Indexx';
import driverslogin from './screens/driverslogin';
import Registerfordriver from './screens/Registerfordriver';
import RealHome from './screens/RealHome';


const Stack = createNativeStackNavigator();
export default function App () {
  return (
    <NavigationContainer style={style.container}>
      <Stack.Navigator>
        {/* <Stack.Screen name="RHome" options={{headerShown:false}} component={RealHome}/> */}
        <Stack.Screen name="Index"  options={{headerShown:false}}  component={Indexx}/>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="Driverlogin" options={{ headerShown: false }} component={driverslogin} />
        <Stack.Screen name="Driverregister" options={{ headerShown: false }} component={Registerfordriver} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
