import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";


const UpHeader = ({ placeholder1,Back }) => {
  const navigation = useNavigation();
  const handleUploadPress = () => {
    navigation.navigate({Back});
  };

  return (
    <TouchableOpacity style={styles.TouchContainer} onPress={handleUploadPress}>
      <Ionicons
        name="chevron-back-circle-sharp"
        size={30}
        color={COLORS.primary}
        style={styles.Icon}
      />
      <Text style={styles.HeaderText}>{placeholder1}</Text>{" "}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  TouchContainer: {
    flexDirection: "row",
  },

  HeaderText: {
    fontSize: 18,
    paddingVertical: 3,
    color: COLORS.black,
    fontWeight: 600,
    paddingLeft: 9,
  },
});

export default UpHeader;
