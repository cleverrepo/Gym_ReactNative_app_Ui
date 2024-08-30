import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Pages/Authentication/Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Pages/Authentication/Login';
import Welcome from './Pages/Authentication/Screens/Welcome';
import Register from './Pages/Authentication/Register';
import Intro from './Pages/Authentication/Screens/Intro';
import Question from './Pages/Authentication/Screens/Question';
import Home from './Pages/Authentication/Screens/Home';
import BottomBar from './Pages/Authentication/Screens/BottomBar';
import WorkOut from './Pages/Authentication/Screens/WorkOut';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash' component={SplashScreen} screenOptions={{
     headerShown:false
     
    }} >
      <Stack.Screen name='Splash' component={SplashScreen}/>
      <Stack.Screen name='Welcome' component={Welcome}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Intro' component={Intro}/>
      <Stack.Screen name='Question' component={Question}/>
      <Stack.Screen name='BottomBar' component={BottomBar}/>
      <Stack.Screen name='import { useNavigation } from "@react-navigation/native";' component={WorkOut}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
