import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Pressable,
  TouchableOpacity,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";

const InputForm = ({ placeholder}) => {
  return  (
    <View style={styles.TextInputForm}>

<TextInput
  style={styles.InputTab}
  placeholder={placeholder}
 >

 </TextInput>
 </View>
  
  ) 

};
const styles = StyleSheet.create({
InputTab: {
    width: "100%",
  },
  TextInputForm: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
    paddingLeft: 22,
  },
})
export default InputForm;
