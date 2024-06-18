import { Text, TouchableOpacity, StyleSheet,Image  } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";


const ImageCont = () => {
    

  return (
    <View style={styles.TouchContainer} onPress={handleUploadPress}>
       <Image
         
        style={styles.imageStyle}
        resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  TouchContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 12,
    padding: 10,
    width: 150,
    height: 150,
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default ImageCont;
