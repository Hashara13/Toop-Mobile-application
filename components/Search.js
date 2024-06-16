import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import React from "react";
import COLORS from "../constants/colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Search = ({ icon, placeholder }) => {
  return (
    <View style={styles.SearchContainer}>
      <FontAwesome5
        name={icon}
        size={21}
        color="#FF5757"
        style={styles.SearchIcon}
      />

      <TextInput style={styles.SearchText} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: ' #E9E4E3',
    borderColor: COLORS.black,
    flexDirection: "row",
    marginHorizontal: 16,
    marginVertical: 1,

    borderRadius: 12,

    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
  },
  SearchIcon: {
    // alignItems:"flex-start",
  },
  SearchText: {
    fontSize: 14,
    paddingLeft: 9,
    color: "#848884",
  },
});
export default Search;
