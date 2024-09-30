import React,{useState,useEffect} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView ,ScrollView} from 'react-native';
import Search from '../components/Search';
import { useNavigation } from "@react-navigation/native";
import Octicons from '@expo/vector-icons/Octicons';
import COLORS from '../constants/colors';
import OwnMusic from '../components/OwnMusic';
import MusicTrack from '../components/MusicTrack';
const[newMusic,setNewMusic]=useState([]);
useEffect(() => {
  const viewMusic = () => {
    axios.get('http://localhost:3000/myMusic')
      .then((res) => {
        setNewMusic(res.data);
      }).catch((err) => {
        alert(err.message);
      });
  };
  viewMusic();
}, []);
const Mymusic = () => {
  const navigation = useNavigation();
  const handleUploadPress = () => {
    navigation.navigate("Upload");
  };

 

  const placeholder = "UPLOAD"; 

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 0 , backgroundColor:COLORS.black}}>
      <View style={styles.SearchContainer}>
        <Text style={styles.HeaderText}>Add New</Text>
        <TouchableOpacity onPress={handleUploadPress}>
          <View style={styles.UploadView}>
            <Octicons name="upload" size={24} color={COLORS.white} style={styles.SearchIcon} />
            <Text style={styles.ButtonText}>{placeholder}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Search icon="search" placeholder="  Find your favourite music" />
      <ScrollView >
      <Text style={styles.HeaderText2}>Categories</Text>
      <MusicTrack/>
      </ScrollView >
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HeaderText2: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: 700,
    marginBottom:10,
    paddingLeft: 9,
    paddingTop: 8,
  },
  SearchContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: COLORS.black,
    backgroundColor: COLORS.dark,
    flexDirection: "row",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: "space-between",
    marginEnd: 0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  UploadView: {
    flexDirection: "row-reverse",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: COLORS.black,
    justifyContent: "space-between",
    borderColor: COLORS.black,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    borderRadius: 8,
  },
  HeaderText: {
    fontSize: 22,
    color: COLORS.white,
    fontWeight: "700",
    paddingLeft: 9,
    paddingTop: 8,
    shadowColor: COLORS.black,
  },
  ButtonText: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: "600",
    paddingRight:10,
    shadowColor: COLORS.white,
    shadowOpacity: 10,
  }
});

export default Mymusic;
