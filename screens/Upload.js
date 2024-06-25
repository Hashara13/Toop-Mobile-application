import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
 
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import { Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";
import UpHeader from "../components/UploadHeader";
import InputForm from "../components/Input";
import Entypo from "@expo/vector-icons/Entypo";
import Button from "../components/Button";
import HomeScreen from "./HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { color } from "react-native-elements/dist/helpers";

const Upload = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [musicFile, setMusicFile] = useState(null);
  const [musicFileName, setMusicFileName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [optionsCont, setoptionsCont] = useState("");
  const [newContributor, setNewContributor] = useState({
    name: "",
    role: "",
    percentage: "",
  });
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    features: [],
  });
  const [packages, setPackages] = useState([]);
  const [contributors, setContributors] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const selectMusicFile = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setMusicFile(result.uri);
        const uriParts = result.uri.split("/");
        const fileName = uriParts[uriParts.length - 1];
        setMusicFileName(fileName);
      }
    } catch (error) {
      console.log("Error selecting music file:", error);
    }
  };

  const handleCheckBoxPress = (id) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((optionId) => optionId !== id));
      return optionId;
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const handleSubmit = () => {
    console.log("Selected options:", selectedOptions);
  };

  const addContributor = () => {
    console.log("New Contributor before adding:", newContributor);
    console.log("Contributors before adding:", contributors);
  
    setContributors([...contributors, newContributor]);
    setNewContributor({ name: "", role: "", percentage: "" });
  
    console.log("New Contributor after reset:", newContributor);
    console.log("Contributors after adding:", [...contributors, newContributor]);
  };

  function addPackage() {
    setPackages([...packages, newPackage]);
    setNewPackage({ name: "", price: "", features: [] });
  }

  const handleFeatureSelection = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter((item) => item !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <UpHeader
              placeholder1="Home"
              placeholder2=" | Upload File"
              icon="Upload"
              targetSrc="HomeScreen"
              targetSrc2="Upload File"
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.parentContainer}>
                <View style={styles.ImgContainer}>
                  <Image
                    source={require("../assets/mc.png")}
                    style={styles.imageStyle}
                    resizeMode="content"
                  />
                </View>
              </View>
              <View style={styles.UploadCont}>
                <Entypo name="upload" size={80} color={COLORS.grey} />
                <Button
                  style={{
                    paddingBottom: 8,
                    paddingVertical: 8,
                    width: "80%",
                    borderColor: COLORS.black,
                    backgroundColor: "transparent",
                    fontSize: 10,
                    color: COLORS.black,
                    borderWidth: 2,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={14}
                  color={COLORS.black}
                  title="Select Music File"
                  onPress={selectMusicFile}
                />
                {musicFileName ? (
                  <Text style={styles.fileNameText}>{musicFileName}</Text>
                ) : null}
              </View>
              <View style={styles.TextInputContainer}>
                <InputForm
                  value={title}
                  placeholder="Add Title"
                  onChangeText={setTitle}
                />
                <Picker
                  selectedValue={category}
                  onValueChange={(itemValue) => setCategory(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item label="Select Category" value="" />
                  <Picker.Item label="Pop" value="Pop" />
                  <Picker.Item label="Rock" value="Rock" />
                  <Picker.Item label="Jazz" value="Jazz" />
                  <Picker.Item label="Classical" value="Classical" />
                  <Picker.Item label="Hip-Hop" value="Hip-Hop" />
                  <Picker.Item label="Country" value="Country" />
                  <Picker.Item label="Electronic" value="Electronic" />
                </Picker>
                <Button
                  style={{
                    marginVertical: 20,
                    paddingBottom: 8,
                    paddingVertical: 8,
                  }}
                  title="Next"
                  onPress={() => setStep(2)}
                  color={COLORS.white}
                />
              </View>
            </ScrollView>
          </View>
        );
      case 2:
        return (
          <View style={styles.stepContainer}>
            <UpHeader
              placeholder1="Upload"
              placeholder2=" | Add Contributors"
              targetSrc="Upload"
              targetSrc2="Upload File"
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 30,
                }}
              >
                <Ionicons name="person-add" size={160} color={COLORS.grey} />
              </View>
              <View style={styles.InputContainer}>
              <InputForm
          value={newContributor.name}
          placeholder="Contributor Name"
          onChangeText={(text) =>
            setNewContributor({ ...newContributor, name: text })
          }
        />
                <Picker
                  selectedValue={newContributor.role}
                  
                  onValueChange={(itemValue) =>
                    setNewContributor({ ...newContributor, role: itemValue })
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Select Role" value="" />
                  <Picker.Item label="Vocalist" value="Vocalist" />
                  <Picker.Item label="Lyricist" value="Lyricist" />
                  <Picker.Item label="Musician" value="Musician" />
                </Picker>

                <InputForm
          placeholder="Percentage"
          value={newContributor.percentage}
          onChangeText={(text) =>
            setNewContributor({ ...newContributor, percentage: text })
          }
        />

                <Button
                  style={{
                    paddingBottom: 15,
                    flex: 1,
                    paddingVertical: 15,
                    width: "80%",
                    borderColor: COLORS.black,
                    backgroundColor: COLORS.black,
                    marginVertical: 10,
                    marginHorizontal: 35,
                    borderWidth: 2,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={18}
                  color={COLORS.white}
                  title="Add Contributor"
                  onPress={addContributor}
                />

                <FlatList
                  data={contributors}
                  renderItem={({ item }) => (
                    <View style={styles.listItem}>
                      <Text>{`${item.name}:  ${item.role}: ${item.percentage}`}</Text>
                      <Icon name={"close"} size={20} style={styles.icon} on />
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>

              <Button
                style={{
                  marginVertical: 20,
                  paddingBottom: 8,
                  paddingVertical: 8,
                }}
                title="Next"
                onPress={() => setStep(3)}
                color={COLORS.white}
              />
            </ScrollView>
          </View>
        );
      case 3:
        return (
          <View style={styles.stepContainer}>
            <View style={styles.TextInputForm}>
              <TextInput
                style={styles.InputTab}
                placeholder="Package Name"
                value={newPackage.name}
                onChangeText={(text) =>
                  setNewPackage({ ...newPackage, name: text })
                }
              />
            </View>
            <View style={styles.TextInputForm}>
              <TextInput
                style={styles.InputTab}
                placeholder="Price"
                value={newPackage.price}
                onChangeText={(text) =>
                  setNewPackage({ ...newPackage, price: text })
                }
              />
            </View>
            <View style={styles.featuresContainer}>
              <Text style={styles.featuresLabel}>Select Features:</Text>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={selectedFeatures.includes("Commercial Use")}
                  onValueChange={() => handleFeatureSelection("Commercial Use")}
                />
                <Text style={styles.checkboxLabel}>Commercial Use</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={selectedFeatures.includes("On Stage Use")}
                  onValueChange={() => handleFeatureSelection("On Stage Use")}
                />
                <Text style={styles.checkboxLabel}>On Stage Use</Text>
              </View>
              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={selectedFeatures.includes("Content Usage")}
                  onValueChange={() => handleFeatureSelection("Content Usage")}
                />
                <Text style={styles.checkboxLabel}>Content Usage</Text>
              </View>
            </View>
            <Button title="Add Package" onPress={addPackage} color="orange" />
            <FlatList
              data={packages}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text>{`${item.name}: ${item.price} - ${item.features.join(
                    ", "
                  )}`}</Text>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Button title="Submit" onPress={() => setStep(4)} color="black" />
          </View>
        );
      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.submittedText}>Music Details:</Text>
            <Text>Title: {title}</Text>
            <Text>Category: {category}</Text>
            <Text>Contributors:</Text>
            <FlatList
              data={contributors}
              renderItem={({ item }) => (
                <Text>{`${item.name} (${item.role}): ${item.percentage}%`}</Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Text>Packages:</Text>
            <FlatList
              data={packages}
              renderItem={({ item }) => (
                <Text>{`${item.name}: ${item.price} - ${item.features.join(
                  ", "
                )}`}</Text>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        );
      default:
        return null;
    }
  };

  return <View style={styles.container}>{renderStep()}</View>;
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    justifyContent: "center",
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    borderRadius: "12px",
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  checkboxContainer: {
    marginVertical: 10,
    shadowColor: COLORS.black,
    backgroundColor: COLORS.secondary,
  },
  button: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 20,
    justifyContent: "center",
  },
  parentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  stepContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  TextInputContainer: {
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  listItem: {
    padding: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featuresLabel: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkboxLabel: {
    marginLeft: 10,
  },
  submittedText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fileNameText: {
    marginTop: 10,
    color: COLORS.grey,
    fontSize: 14,
    textAlign: "center",
  },
  TextInputForm: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingLeft: 22,
  },
  InputTab: {
    width: "100%",
  },
  ContList: {
    flex: 1,
  },
  icon: {
    marginLeft: 10,
  },
  NextButton: {
    paddingBottom: 16,
    paddingVertical: 6,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  ImgContainer: {
    marginVertical: 49,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    //   alignContent:'center',
    width: 300,
    height: 300,
  },
  InputContainer: {
    shadowColor: COLORS.black,
    borderColor: COLORS.black,
    borderRadius: 10,
    borderWidth: 0,
    paddingBottom: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 32,
  },
  UploadCont: {
    marginHorizontal: 20,
    marginVertical: 0,

    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  picker: {
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
});

export default Upload;
