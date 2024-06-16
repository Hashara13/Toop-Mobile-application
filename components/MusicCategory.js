import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import COLORS from "../constants/colors";
import CatList from "../constants/CatList";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { CatListitemns } from "../constants/CatList";

const MusicCategory = ({ icon, placeholder }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Categories</Text>
      <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.CatViewScroll}>
        {CatListitemns.map((catrgory, id) => {
          return (
            <View>
              <Text style={styles.CatView} >{catrgory.catrgory}</Text>
            </View>
          );
        })}
          </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    paddingVertical: 12,

    marginHorizontal: 16,
    marginVertical: 1,
  },
  CatView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    // borderRadius: 8,
  },
  CatViewScroll:{
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal:0,

    flexDirection:"row",
    justifyContent: "space-between",
  },
  SearchIcon: {
    // alignItems:"flex-start",
  },
  SearchText: {
    fontSize: 14,
    paddingLeft: 9,
    color: "#848884",
  },
  HeaderText: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: 700,
    paddingLeft: 9,
    paddingTop: 8,
  },
});
export default MusicCategory;
