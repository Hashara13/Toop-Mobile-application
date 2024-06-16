import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

import Octicons from '@expo/vector-icons/Octicons';


const Header = ({ placeholder1,icon, placeholder }) => {
  const navigation = useNavigation();
  const handleUploadPress = () => {
    navigation.navigate("Upload");
  };

    return (
      <View style={styles.SearchContainer}>
        <Text style={styles.HeaderText}>{placeholder1}</Text>
        <TouchableOpacity onPress={handleUploadPress}>
        <View style={styles.UploadView}  >
      <Octicons name="upload" size={24} color={COLORS.white}
          style={styles.SearchIcon}
        />
         <Text style={styles.ButtonText}>{placeholder}</Text>
  </View>
        </TouchableOpacity>
      
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    SearchContainer: {
      paddingHorizontal: 2,
      paddingVertical: 4,
      borderColor: COLORS.black,
      flexDirection: "row",
      marginHorizontal: 16,
      justifyContent:"space-between",
      marginVertical: 10,
  
     
    },
    UploadView:{
        
    flexDirection:"row-reverse",
    paddingHorizontal:16,
    paddingVertical:10,
    backgroundColor:COLORS.black,
      justifyContent:"space-between",
      borderColor: COLORS.black,
      shadowColor: COLORS.black,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 7,
      borderRadius:8,
    
    },
    
    HeaderText: {
      fontSize: 22,
      color:COLORS.black,
      fontWeight:700,
      paddingLeft: 9,
      paddingTop:8
     
    },
    ButtonText:{
        fontSize: 16, 
        color:COLORS.white, 
        fontWeight:600,
       shadowColor:COLORS.white, 
       shadowOpacity:10,
      
      
        
    }
  });

export default Header;
