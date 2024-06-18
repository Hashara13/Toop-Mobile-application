import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";


const UpHeader = ({ placeholder1,targetSrc,placeholder2,targetSrc2}) => {
  const navigation = useNavigation();
  const handleUploadPress = () => {
    navigation.navigate(targetSrc);
  };
  const handleUploadPress2 = () => {
    navigation.navigate(targetSrc2);
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
      <Text style={styles.HeaderText2}  onPress={handleUploadPress2}>{placeholder2}</Text>{" "}
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
  HeaderText2: {
    fontSize: 18,
    paddingVertical: 3,
    color: COLORS.grey,
    fontWeight: 600,
    paddingLeft: 1,
  },
});

export default UpHeader;
