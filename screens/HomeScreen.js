import React from 'react';
import { View, Button, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import Search from '../components/Search';
import Header from '../components/Header';
import MusicCategory from '../components/MusicCategory';
import Trending from '../components/Trending';
 

function HomeScreen() {
  
    return (
       
      <SafeAreaView style={{flex:1, marginHorizontal:6}}>
   
      <Header placeholder1="Hi Hashara," icon="Upload" placeholder="UPLOAD  "/>
<Search icon="search" placeholder="  Find your favourite music"/>
<ScrollView >
<MusicCategory/>

<Trending/>
</ScrollView> 
        </SafeAreaView>
     
    )}
export default HomeScreen;
