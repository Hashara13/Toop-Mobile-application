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
import { colors } from "react-native-elements";

const MusicCategory = ({ icon, placeholder }) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CatListitemns.map((catrgory, id) => {
          return (
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginHorizontal: 10,
                shadowColor: COLORS.black,
                shadowOffset: { width: 1, height: 2 },
                shadowOpacity: 0.3,
                borderRadius: 7,
                shadowRadius: 7,
                marginVertical: 10,

                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: id === 0 ? COLORS.black : COLORS.white,
              }}
            >
              <Text style={{ color: id === 0 ? COLORS.white : COLORS.black }}>
                {catrgory.catrgory}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    paddingVertical: 12,
    marginHorizontal: 10,
    marginVertical: 1,
  },
  SearchIcon: {},
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
