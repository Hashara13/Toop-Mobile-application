import React from 'react';
import { View, Button, Text, StyleSheet,SafeAreaView } from 'react-native';
import Search from '../components/Search';
import Header from '../components/Header';
import MusicCategory from '../components/MusicCategory';
 

function HomeScreen() {
  
    return (
      <SafeAreaView style={{flex:1, marginHorizontal:6}}>
      
      <Header placeholder1="Hi Hashara," icon="Upload" placeholder="UPLOAD  "/>
<Search icon="search" placeholder="  Find your favourite music"/>
<MusicCategory/>
        </SafeAreaView>

    )}
export default HomeScreen;
