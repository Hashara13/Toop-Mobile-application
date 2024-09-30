import React from 'react';
import { View, Button, Text, StyleSheet,SafeAreaView,ScrollView } from 'react-native';
import Search from '../components/Search';
import Header from '../components/Header';
import MusicCategory from '../components/MusicCategory';
import Trending from '../components/Trending';
import COLORS from '../constants/colors';
 

function HomeScreen() {
  
    return (
       
      <SafeAreaView style={{flex:1, marginHorizontal:0}}>
   
      <Header backgroundColor={COLORS.white} placeholder1="Hi Hashara," icon="Upload" placeholder="UPLOAD  "/>
<Search icon="search" placeholder="  Find your favourite music"/>
<ScrollView >
<MusicCategory/>

<Trending/>
</ScrollView> 
        </SafeAreaView>
     
    )}
export default HomeScreen;
