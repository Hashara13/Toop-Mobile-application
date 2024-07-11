import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import COLORS from "../constants/colors";
import { useFonts } from "expo-font";
import Button from "./Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { priceList } from "../constants/pricingPack";
import { priceListTrack } from "../constants/priceTrack";

const OwnMusic = () => {
  const [fontsLoaded] = useFonts({
    "CustomFont-Bold": require("../assets/fonts/static/DMSans-Bold.ttf"),
  });

  const [selectedPackage, setSelectedPackage] = useState("standard");

  const options = [
    { label: "Annual Access", value: "Annual Access" },
    { label: "Per Track", value: "Per Track" },
  ];

  const renderPackageDescription = (description) => {
    const isNA = description?.includes("N/A");
    return (
      <Text
        style={[
          styles.packageDescription,
          { color: isNA ? COLORS.grey2 : COLORS.grey },
        ]}
      >
        {description}
      </Text>
    );
  };

  const renderPackageDescriptionIcon = (description) => {
    const isNAICON = description?.includes("N/A");
    return (
      <MaterialCommunityIcons
        name={isNAICON ? "emoticon-sad" : "emoticon-cool"}
        color={isNAICON ? COLORS.secondary : COLORS.green}
        size={24}
      />
    );
  };
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
            <View style={styles.packageDetails}>
              <Text style={styles.packageTitle}>Free</Text>
              <View style={styles.packageIcon}>
                <MaterialCommunityIcons
                  name="emoticon-cool"
                  color={COLORS.green}
                  size={24}
                />
                <Text style={styles.packageDescription}>
                  Video & Social Media | 1 Channel
                </Text>
              </View>
              <Button
                    style={{
                      flex: 1,
                      paddingBottom: 6,
                      marginTop:30,
                      paddingVertical: 5,
                      paddingHorizontal: 5,
                      width: "50%",
                      borderColor: COLORS.lightblue,
                      backgroundColor: COLORS.lightblue,
                      marginVertical: 6,
                      marginHorizontal: 0,
                      borderWidth: 1,
                      borderRadius: 12,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    fontSize={16}
                    fontWeight={600}
                    color={COLORS.white}
                    title="Explore"
                  />
            </View>
            {priceList.map(
              ({ id, Title, Price, Social, AudioD, Digital, Dev, Events }) => (
                <View style={styles.packageDetails} key={id}>
                  <Text style={styles.packageTitle}>{Title}</Text>
                  <Text style={styles.packagePrice}>{Price}</Text>
                  <View style={styles.packageIcon}>
                    {renderPackageDescriptionIcon(Social)}
                    {renderPackageDescription(Social)}
                  </View>

                  <View style={styles.packageIcon}>
                    {renderPackageDescriptionIcon(AudioD)}
                    {renderPackageDescription(AudioD)}
                  </View>
                  <View style={styles.packageIcon}>
                    {renderPackageDescriptionIcon(Digital)}
                    {renderPackageDescription(Digital)}
                  </View>
                  <View style={styles.packageIcon}>
                    {renderPackageDescriptionIcon(Dev)}
                    {renderPackageDescription(Dev)}
                  </View>
                  <View style={styles.packageIcon}>
                    {renderPackageDescriptionIcon(Events)}
                    {renderPackageDescription(Events)}
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
                      marginVertical: 15,
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
          // <View style={styles.packageDetails}>
          //   <Text style={styles.packageTitle}>Basic Package</Text>
          //   <Text style={styles.packagePrice}>Price: $30/month</Text>
          //   <Text style={styles.packageDescription}>
          //     The Basic Package includes essential features with standard
          //     royalties.
          //   </Text>
          // </View>
          <View style={styles.packageBase}>
          <View style={styles.packageDetails}>
            <Text style={styles.packageTitle}>Free</Text>
            <View style={styles.packageIcon}>
              <MaterialCommunityIcons
                name="emoticon-cool"
                color={COLORS.green}
                size={24}
              />
              <Text style={styles.packageDescription}>
                Video & Social Media | 1 Channel
              </Text>
            </View>
            <Button
                  style={{
                    flex: 1,
                    paddingBottom: 6,
                    marginTop:30,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    width: "50%",
                    borderColor: COLORS.lightblue,
                    backgroundColor: COLORS.lightblue,
                    marginVertical: 6,
                    marginHorizontal: 0,
                    borderWidth: 1,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={16}
                  fontWeight={600}
                  color={COLORS.white}
                  title="Explore"
                />
          </View>
          {priceListTrack.map(
            ({ id, Title, Price, Social, AudioD, Digital, Dev, Events }) => (
              <View style={styles.packageDetails} key={id}>
                <Text style={styles.packageTitle}>{Title}</Text>
                <Text style={styles.packagePrice}>{Price}</Text>
                <View style={styles.packageIcon}>
                  {renderPackageDescriptionIcon(Social)}
                  {renderPackageDescription(Social)}
                </View>

                <View style={styles.packageIcon}>
                  {renderPackageDescriptionIcon(AudioD)}
                  {renderPackageDescription(AudioD)}
                </View>
                <View style={styles.packageIcon}>
                  {renderPackageDescriptionIcon(Digital)}
                  {renderPackageDescription(Digital)}
                </View>
                <View style={styles.packageIcon}>
                  {renderPackageDescriptionIcon(Dev)}
                  {renderPackageDescription(Dev)}
                </View>
                <View style={styles.packageIcon}>
                  {renderPackageDescriptionIcon(Events)}
                  {renderPackageDescription(Events)}
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
                    marginVertical: 15,
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
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    // padding: 16,
  },
  packageBase: {
    width: "%",
    paddingVertical: 5,
    // paddingHorizontal: 6,
    marginVertical: 5,

    marginHorizontal: 3,

  
    flexDirection: "column",
  },
  packageContainer: {
    alignItems: "flex-start",
    marginTop:5,
    // marginHorizontal: 10,
    flex:1,
  },
  packageIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  packageDetails: {
    alignItems: "flex-start",
    padding: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
  
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
    marginBottom: 3,
  },
  packagePrice: {
    fontSize: 20,
    marginBottom: 15,
  },
  packageDescription: {
    fontSize: 16,
    textAlign: "left",
    paddingLeft: 10,
  },
  TextContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    //  alignItems:'center',
    alignContent: "center",
    justifyContent: "center",
    marginVertical: 5,
    marginTop: 2,
    width: "80%",
  },
  HeaderText: {
    fontSize: 25,
    color: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
    fontWeight: 540,
    textAlign: "center",
    paddingTop: 8,
    paddingHorizontal: 10,
    fontFamily: "CustomFont-Bold",
  },
});

export default OwnMusic;
