//Import
import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, DefaultTheme } from 'react-native';
import firebase from "firebase/compat/app";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import BookView from "./Components/BookView";
import About from "./Components/About";
import Ionicons from "react-native-vector-icons/Ionicons";

//UI Kitten dependables
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
//import { Icon } from '@ui-kitten/components';

//Initiate stack navigation and bottom tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Define and initialize firebase connection
export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyBSBf-wCxe5x7RI1wCE-qndbqPP9Ny8Wsc",
    authDomain: "innovation-8cc4f.firebaseapp.com",
    databaseURL: "https://innovation-8cc4f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "innovation-8cc4f",
    storageBucket: "innovation-8cc4f.appspot.com",
    messagingSenderId: "153970854",
    appId: "1:153970854:web:31190f8b20f7c4fb59ac67",
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  //Defines app theme colors in alignment with the UIKItten dark theme
  const UniBookTheme = {
    dark: false,
    colors: {
      primary: '#2E3A59',
      background: '#1A2138',
      card: '#2E3A59',
      text: '#ffff',
      border: '#2E3A59',
      notification: 'rgb(255, 69, 58)',
    },
  };

  //Stack screens
  const StackNavigation = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home}/>
        <Stack.Screen name={'Available Books'} component={BookView}/>
        <Stack.Screen name={'Add Books'} component={AddBook}/>
        <Stack.Screen name={'About'} component={About}/>
      </Stack.Navigator>
    )
  }

//Return application container with screens for the bottom tab bar.
  return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.dark}>
      <NavigationContainer theme={UniBookTheme}> 
          <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#ffff'
          }}>
              <Tab.Screen name={'Home'} component={Home} options={{tabBarIcon: () => ( <Ionicons name="home" size={20} color='#ffff' />)}}/>
              <Tab.Screen name={'Available Books'} component={BookView} options={{tabBarIcon: () => ( <Ionicons name="book-outline" size={20} color='#ffff' />)}}/>
              <Tab.Screen name={'Rent out books'} component={AddBook} options={{tabBarIcon: () => ( <Ionicons name="cash-outline" size={20} color='#ffff' />)}}/>
              <Tab.Screen name={'About'} component={About} options={{tabBarIcon: () => ( <Ionicons name="information-circle-outline" size={20} color='#ffff' />)}}/>
          </Tab.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    </>
);
}
