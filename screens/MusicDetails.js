import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";
import UpHeader from "../components/UploadHeader";
import InputForm from "../components/Input";
import Entypo from "@expo/vector-icons/Entypo";
import Button from "../components/Button";
import HomeScreen from "./HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import Header from "../components/Header";
import { color } from "react-native-elements/dist/helpers";
import Octicons from '@expo/vector-icons/Octicons';
import { useNavigation } from "@react-navigation/native";
import Prices from "../components/Pricees";

// const navigation = useNavigation();
const MusicDetails = ({ navigation }) => {
  
  // const handleUploadPress = () => {
  //   // navigation.navigate("Upload");
  // };
  return (
    <View style={styles.stepContainer}>
    <View style={styles.HeaderContainer}>
      <Ionicons
        name="chevron-back-circle-sharp"
        size={35}
        color={COLORS.white}
      /> 
     <TouchableOpacity>
        <View style={styles.NotifyView}  >
        <Entypo name="notification"  style={styles.notIcon} size={28} color={COLORS.white}/>   
  </View>
        </TouchableOpacity>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <Prices/>
            </ScrollView>
             </View>
           
  )
}
const styles = StyleSheet.create({
  stepContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  HeaderContainer: {
    width:'100%',
    paddingHorizontal:10,
    paddingVertical: 10,
    borderColor: COLORS.black,
    backgroundColor:COLORS.dark,
    flexDirection: "row",
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    justifyContent:"space-between",
    marginEnd:0,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },  
  NotifyView:{  
  flexDirection:"row-reverse",
  paddingHorizontal:10,
 
  paddingVertical:2,
  justifyContent:"space-between",
  },
})
export default MusicDetails;
