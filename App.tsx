/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/Screens/HomeScreen';
import MainNavigation from './src/Navigation/MainNavigation';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    // <HomeScreen/>
    <MainNavigation/>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
