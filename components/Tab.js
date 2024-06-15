import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeScreen,MusicDetails,Mymusic,Upload,Settings } from '../screens';

const Tabs = createBottomTabNavigator();

export default function Tab(){
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          }  else if (route.name === 'Find') {
            iconName = focused ? 'albums' : 'albums-outline';
          }
          else if (route.name === 'Upload') {
            iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
          } else if (route.name === 'My Music') {
            iconName = focused ? 'musical-notes' : 'musical-notes-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Find" component={MusicDetails} />
      <Tabs.Screen name="Upload" component={Upload} />
      <Tabs.Screen name="My Music" component={Mymusic} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
}
