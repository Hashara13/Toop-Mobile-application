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
import { Picker } from "@react-native-picker/picker";
import { Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";

const PickerTab = ({value,itemName}) => {
  return  (
    <Picker
    selectedValue={category}
    onValueChange={(itemValue) => setCategory(itemValue)}
    style={styles.picker}
  >
    <Picker.Item label={itemName} value={value} />
    {/* <Picker.Item label="Pop" value="Pop" />
    <Picker.Item label="Rock" value="Rock" />
    <Picker.Item label="Jazz" value="Jazz" />
    <Picker.Item label="Classical" value="Classical" />
    <Picker.Item label="Hip-Hop" value="Hip-Hop" />
    <Picker.Item label="Country" value="Country" />
    <Picker.Item label="Electronic" value="Electronic" /> */}
  </Picker>
  
  ) 

};
const styles = StyleSheet.create({
    picker:{
        width: "100%",
        height: 48,
        borderColor: COLORS.black,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 4,
        paddingLeft: 22,
      },
})
export default PickerTab;
