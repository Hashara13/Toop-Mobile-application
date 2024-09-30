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
import Entypo from '@expo/vector-icons/Entypo';

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
      color:COLORS.white,
      fontWeight:700,
      paddingLeft: 9,
      paddingTop:8,
      shadowColor: COLORS.black,
     
      
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
