import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
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
    console.log("Contributors after adding:", [
      ...contributors,
      newContributor,
    ]);
  };
const removeContributor=(id)=>{
  setContributors(contributors.filter((contributor)=>contributor.id!=id));
};
const addPackage=()=> {
    setPackages([...packages, newPackage]);
    setNewPackage({ name: "", price: "", features: [] });
  }
  const removePackage=(id)=>{
  setPackages(packages.filter((packag)=>packag.id!=id))
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
              targetSrc2="setStep(1)"
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
                    paddingBottom: 10,
                    paddingVertical: 8,
                    width: "50%",
                    borderColor: COLORS.lightblue,
                    backgroundColor: COLORS.lightblue,
                    fontSize: 10,
                    color: COLORS.black,
                    borderWidth: 1,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={14}
                  color={COLORS.white}
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
                    width: "100%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
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
              // targetSrc="Upload"
              // targetSrc2="step(1)"
              setStep={setStep}
              targetStep1={1}
              targetStep2={1}
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
                    paddingHorizontal: 7,
                    width: "50%",
                    borderColor: COLORS.lightblue,
                    backgroundColor: COLORS.lightblue,
                    marginVertical: 10,
                    marginHorizontal: 0,
                    borderWidth: 2,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={16}
                  fontWeight={600}
                  color={COLORS.white}
                  title="Add Contributor"
                  onPress={addContributor}
                />

                <FlatList
                  data={contributors}
                  renderItem={({ item }) => (
                    <View style={styles.listItem}>
                      <Text>{`${item.name}:  ${item.role}: ${item.percentage}`}</Text>
                      <TouchableOpacity onPress={() => removeContributor(item.id)}>
                      <Icon name={"close"} size={20} style={styles.icon}  /></TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={(item) => item.id}
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
            <UpHeader
              placeholder1="Upload"
              placeholder2=" | Pricing"
              targetSrc="Upload"
              targetSrc2="Upload File"
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={styles.InputContainer1}>
                <View style={styles.rateCont}>
                  <Text style={styles.rateText}>Add Your Rates</Text>
                </View>
                <InputForm
                  value={newPackage.name}
                  placeholder="Package Name"
                  onChangeText={(text) =>
                    setNewPackage({ ...newPackage, name: text })
                  }
                />
                <InputForm
                  placeholder="Price"
                  value={newPackage.price}
                  onChangeText={(text) =>
                    setNewPackage({ ...newPackage, price: text })
                  }
                />
                <Picker
                  selectedValue={newPackage.features}
                  onValueChange={(itemValue) =>
                    setNewContributor({ ...newPackage, features: itemValue })
                  }
                  style={styles.picker1}
                >
                  <Picker.Item label="Select Package" value="" />
                  <Picker.Item label="Basic" value="Basic" />
                  <Picker.Item label="Standered" value="Standered" />
                  <Picker.Item label="Premium" value="Premium" />
                </Picker>
                <View style={styles.featuresContainer}>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <Picker style={styles.pickersub}
                    selectedValue={selectedFeatures.includes("Commercial Use")}
                    onValueChange={() => handleFeatureSelection("Commercial Use")}
                    >
                      <Picker.Item label="Commercial Uses" value="" />
                      <Picker.Item label="Advertising and Marketing" value="Advertising and Marketing" />
                      <Picker.Item label="Film and Television" value="Film and Television" />
                      <Picker.Item label="Video Games" value="Video Games" />
                      <Picker.Item label="Custom Music Production" value="Custom Music Production" />
                    </Picker>
                    <Picker style={styles.pickersub}
                       selectedValue={selectedFeatures.includes("Events and Venues")}
                       onValueChange={() => handleFeatureSelection("Events and Venues")}
                    >
                      <Picker.Item label="Events and Venues" value="" />
                      <Picker.Item label="Below 05" value="Below 05" />
                      <Picker.Item label="05 - 10" value="05 - 10" />
                      <Picker.Item label="Above 10" value="Above 10" />
                    </Picker>
              
                  </ScrollView>
                </View>
                <Button
                  style={{
                    paddingBottom: 10,
                    flex: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 7,
                    width: "50%",
                    borderColor: COLORS.lightblue,
                    backgroundColor: COLORS.lightblue,
                    marginVertical: 10,
                    marginHorizontal: 10,
                    borderWidth: 1,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  fontSize={16}
                  fontWeight={600}
                  color={COLORS.white}
                  title="Add Pricing"
                  onPress={addPackage}
                />
                <FlatList
                  data={packages}
                  renderItem={({ item }) => (
                    <View style={styles.listItem}>
                      <Text>{`${item.name}: ${
                        item.price
                      } - ${item.features.join(", ")}`}</Text>
                        <TouchableOpacity onPress={() => removePackage(item.id)}>
                      <Icon name={"close"} size={20} style={styles.icon}  /></TouchableOpacity>
                    </View>
                  
                    
                  )}
                  keyExtractor={(item) => item.id}
                />
              </View>

              <Button
                style={{
                  marginVertical: 20,
                  paddingBottom: 8,
                  paddingVertical: 8,
                  backgroundColor: COLORS.green,
                  borderColor: COLORS.green,
                }}
                title="Submit"
                onPress={() => setStep(4)}
                color={COLORS.white}
              />
            </ScrollView>
          </View>
        );
      case 4:
        return ( 
        <View style={styles.stepContainer}>
          <Modal visible={true} animationType="slide" transparent={true}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:COLORS.white,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  padding: 20,
                  borderRadius: 10,
                  width: "80%",
                  maxHeight: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => setStep(0)}
                  style={{ alignSelf: "flex-end", padding: 6 }}
                >
                  <Text style={{ color: "blue" }}>Close</Text>
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
                >
                  Music Details:
                </Text>
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
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </Modal>
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
    fontColor: COLORS.white,
    paddingVertical: 5,
    justifyContent:'space-between',
    marginHorizontal: 0,
    marginVertical: 0,
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
    borderColor: COLORS.grey2,
    backgroundColor: COLORS.white,
    borderWidth: 0,
    borderRadius: 8,
    fontColor:COLORS.grey2,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 4,
    paddingLeft: 22,
  },
  picker1: {
    width: "100%",
    height: 48,
    backgroundColor: COLORS.white,

    borderWidth: 0,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    marginVertical: 4,
    paddingLeft: 22,
  },
  pickersub: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 4,
    placeholderTextColor: COLORS.black,
    backgroundColor: COLORS.lightgrey,
    borderColor: COLORS.lightgrey,
    borderWidth: 0,
    borderRadius: 8,
    marginVertical: 8,
    borderLeftColor: "#fff4ee",
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  InputContainer1: {
    shadowColor: COLORS.black,
    borderColor: COLORS.black,
    borderRadius: 10,
    borderWidth: 0,
    paddingBottom: 10,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    marginVertical: 35,
  },
  rateCont: {
    marginVertical: 1,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    paddingBottom: 25,
  },
  rateText: {
    fontSize: 28,
    fontWeight: "700",
    paddingTop: 4,
    color: COLORS.primary,
    paddingBottom: 15,
  },
});

export default Upload;
