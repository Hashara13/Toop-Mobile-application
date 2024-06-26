import React, { useState } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import COLORS from "../constants/colors";
import { useFonts } from "expo-font";
import Button from "./Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { priceList } from "../constants/pricingPack";

const Prices = () => {
  const [fontsLoaded] = useFonts({
    "CustomFont-Bold": require("../assets/fonts/static/DMSans-Bold.ttf"),
  });

  const [selectedPackage, setSelectedPackage] = useState("standard");

  const options = [
    { label: "Annual Access", value: "Annual Access" },
    { label: "Per Track", value: "Per Track" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.TextContainer}>
        <Text style={styles.HeaderText}>Select Pricing Plan</Text>
        <View style={styles.ButtonContainer}>
          <SwitchSelector
            options={options}
            initial={0}
            onPress={(value) => setSelectedPackage(value)}
            style={styles.switchSelector}
            buttonColor="#424141"
            backgroundColor="#FFFFFF"
            textColor="#222222"
            selectedColor="#222222"
            borderColor="#222222"
            hasPadding
            height={40}
            width={300}
            borderRadius={20}
            fontSize={16}
            fontWeight="800"
            shadowColor="#222222"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.3}
            shadowRadius={20}
            elevation={5}
            optionStyle={{ margin: 3 }}
            selectedTextStyle={{ color: "white" }}
            unselectedTextStyle={{ color: "blue" }}
          />{" "}
        </View>{" "}
      </View>
      <View style={styles.packageContainer}>
     
        {selectedPackage === "Annual Access" ? (
          <View style={styles.packageBase}>
             {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
            {priceList.map(
              ({ id, Title, Price, Social, AudioD, Digital, Dev, Events }) => (
                <View style={styles.packageDetails} key={id}>
                  <Text style={styles.packageTitle}>{Title}</Text>
                  <Text style={styles.packagePrice}>{Price}</Text>
                  <View style={styles.packageIcon}>
                    <MaterialCommunityIcons
                      name="emoticon-cool"
                      size={24}
                      color="black"
                    />
                    <Text style={styles.packageDescription}>
                      {Social}
                    </Text>
                  </View>
                  <Button
                    style={{
                      flex: 1,
                      paddingBottom: 10,
                      paddingVertical: 7,
                      paddingHorizontal: 7,
                      width: "50%",
                      borderColor: COLORS.lightblue,
                      backgroundColor: COLORS.lightblue,
                      marginVertical: 10,
                      marginHorizontal: 0,
                      borderWidth: 1,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    fontSize={16}
                    fontWeight={600}
                    color={COLORS.white}
                    title="PURCHASE"
                  />
                </View>
              )
            )}
          {/* </ScrollView> */}
          </View>
        ) : (
          <View style={styles.packageDetails}>
            <Text style={styles.packageTitle}>Basic Package</Text>
            <Text style={styles.packagePrice}>Price: $30/month</Text>
            <Text style={styles.packageDescription}>
              The Basic Package includes essential features with standard
              royalties.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:10,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
  },
  packageBase: {
   
    width: "80%",
    paddingVertical: 5,
    paddingHorizontal:10,
    marginVertical:10,
    marginHorizontal:10,

    marginHorizontal: 12,
    flexDirection: "column",
  },
  packageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal:10,
  },
  packageIcon: {
    flexDirection: "row",
  },
  packageDetails: {
    alignItems: "center",
    padding: 20,
    paddingVertical: 10,
                paddingHorizontal: 10,
                marginHorizontal: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginVertical: 10,
    fontFamily: "CustomFont-Bold",
    borderWidth: 1,
    borderColor: COLORS.grey2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 5,
  },
  switchSelector: {
    shadowColor: "#222222",
    // // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 20,
    // // elevation: 5,
  },
  packageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  packagePrice: {
    fontSize: 20,
    marginBottom: 10,
  },
  packageDescription: {
    fontSize: 16,
    textAlign: "center",
  },
  TextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    //  alignItems:'center',
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 2,
    width: "80%",
  },
  HeaderText: {
    fontSize: 18,
    color: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    fontWeight: 600,
    textAlign: "center",
    paddingTop: 8,
    paddingHorizontal: 10,
    fontFamily: "CustomFont-Bold",
  },
});

export default Prices;
