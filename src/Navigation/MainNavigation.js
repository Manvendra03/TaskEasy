import {StyleSheet, Image, Text, View, Platform} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
import CalenderScreen from '../Screens/CalenderScreen';
import AnalyticsScreen from '../Screens/AnalyticsScreen';
import HomeSVG from '../Assets/home.svg';
import CalendarSVG from '../Assets/calendar.svg';
import AnalyticSVG from '../Assets/analytics.svg';
import PersonSVG from '../Assets/person.svg';
import AddSVG from '../Assets/add.svg';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
 
  const selectedColor = "#6033E0";
  const unSelectedColor = "#9A7CEE";


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#EEE9FF',
            // borderTopLeftRadius: 20,
            // borderTopRightRadius: 20,
            borderRadius: 20,

            position: 'absolute',
            left: 10,
            right: 10,
            bottom: 10,
            elevation: 4,
            height: 65,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 30,
                  width: 30,
                   top: Platform.OS === 'ios'? 12:0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <HomeSVG height={35} width={35} fill = {focused? selectedColor: unSelectedColor} />
                {/* <Text>Home</Text> */}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CalenderScreen"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 50,
                  width: 50,
                  top: Platform.OS === 'ios'? 12:0,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <CalendarSVG height={33} width={33}  fill = {focused? selectedColor: unSelectedColor} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AnalyticsScreen"
          component={AnalyticsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 40,
                  backgroundColor: selectedColor,
                  top: Platform.OS === 'ios'? -15 : -30,

                  justifyContent: 'center',
                  alignItems: 'center',
                  // backgroundColor: 'red',
                }}>
                <AddSVG height={30} width={30} fill = {"white"}/>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="AddNewCategory"
          component={AnalyticsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 50,
                  width: 50,
                  top: Platform.OS === 'ios'? 12:0,

                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AnalyticSVG height={35} width={35} fill = {focused? selectedColor: unSelectedColor} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  height: 50,
                  width: 50,
                  top: Platform.OS === 'ios'? 12:0,

                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <PersonSVG  height={35} width={35} fill = {focused? selectedColor: unSelectedColor}/>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
