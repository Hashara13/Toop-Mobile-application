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
  // Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Input, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../constants/colors";
import UpHeader from "../components/UploadHeader";
import InputForm from "../components/Input";
import Entypo from '@expo/vector-icons/Entypo';
import Button from "../components/Button";
import HomeScreen from "./HomeScreen";
import { color } from "react-native-elements/dist/helpers";


const Upload = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [musicFile, setMusicFile] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [optionsCont, setoptionsCont] = useState("");
  const [contributors, setContributors] = useState([]);
  const [newContributor, setNewContributor] = useState({
    name: "",
    role: "",
    percentage: "",
  });
  const [packages, setPackages] = useState([]);
  const [newPackage, setNewPackage] = useState({
    name: "",
    price: "",
    features: [],
  });
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
      }
    } catch (error) {
      console.log("Error selecting music file:", error);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { id: 1, label: "Vocalist" },
    { id: 2, label: "Lyricist" },
    { id: 3, label: "Musician" },
  ];

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
    setContributors([...contributors, newContributor]);
    setNewContributor({ name: "", role: "", percentage: "" });
    handleCheckBoxPress;
  };

  const addPackage = () => {
    setPackages([...packages, newPackage]);
    setNewPackage({ name: "", price: "", features: [] });
  };

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
              placeholder1="Hi Hashara,"
              icon="Upload"
              placeholder="UPLOAD  "
              onPress={HomeScreen}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.parentContainer}>
            <View style={styles.ImgContainer}>
       <Image
         source={require('../assets/mc.png')}
        style={styles.imageStyle}
        resizeMode="content" 
        />
    </View>
    </View>
            <View style={styles.UploadCont}>
            <Entypo  name="upload" size={120} color="black" />
            <Button
            style={{
              paddingBottom: 8,
              paddingVertical: 8,
              width:"80%",
              borderColor: COLORS.black,
              backgroundColor: "transparent",
              fontSize:10,
               color:COLORS.black,
              borderWidth: 2,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            fontSize={14}
            color={COLORS.black}
              title="Select Music File"
              onPress={selectMusicFile}
              
            />
            </View>
            <View style={styles.TextInputContainer}>
              <InputForm
                value={title}
                placeholder="Title"
                onChangeText={setTitle}
              />

              <InputForm
                value={category}
                placeholder="Category"
                onChangeText={setCategory}
              />

              <Button
              style={{ marginVertical:20,paddingBottom: 8,
                paddingVertical: 8,}}
              
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
              placeholder1="Hi Hashara,"
              icon="Upload"
              placeholder="UPLOAD  "
              onPress={Upload}
            />
            <View style={styles.TextInputForm}>
              <TextInput
                style={styles.InputTab}
                placeholder="Contributor Name"
                value={newContributor.name}
                onChangeText={(text) =>
                  setNewContributor({ ...newContributor, name: text })
                }
              />
            </View>

            <View style={styles.TextInputForm}>
              <TextInput
                style={styles.InputTab}
                placeholder="Role (Vocalist, Lyricist, Musician)"
                value={newContributor.role}
                onChangeText={(text) =>
                  setNewContributor({ ...newContributor, role: text })
                }
              />
            </View>
            <View style={styles.container1}>
              {options.map((option) => (
                <CheckBox
                  key={option.id}
                  title={option.label}
                  checked={selectedOptions.includes(option.id)}
                  onPress={() => handleCheckBoxPress(option.id)}
                  containerStyle={styles.checkboxContainer}
                />
              ))}
            </View>
            <View style={styles.TextInputForm}>
              <TextInput
                style={styles.InputTab}
                placeholder="Percentage"
                value={newContributor.percentage}
                onChangeText={(text) =>
                  setNewContributor({ ...newContributor, percentage: text })
                }
              />
            </View>
            <Button
              title="Add Contributor"
              onPress={addContributor}
              color="orange"
            />
            <FlatList
              data={contributors}
              // data={options}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                  <Text
                    style={styles.ContList}
                  >{`${item.name} (${item.role}): ${item.percentage}%`}</Text>

                  <Icon name={"close"} size={20} style={styles.icon} on />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
            <Button
              title="Next"
              filled
              onPress={() => setStep(3)}
              styles={styles.NextButton}
              style={{
                marginTop: 18,
                marginBottom: 4,
              }}
            />
            {/* <Button title="Next" onPress={() => setStep(3)} color="orange" /> */}
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
    borderRadius: "12px",
    paddingHorizontal: 16,
    backgroundColor: COLORS.primary,
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
    padding: 20,
    justifyContent: "center",
  },
  parentContainer: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  stepContainer: {
    flex: 1,
    // marginHorizontal: 22,
    // marginVertical: 22,
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
    marginHorizontal:20,
    alignItems: 'center',
  justifyContent:'center',
  //   alignContent:'center',
    width: 300,
    height: 300,
   
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  UploadCont:{
    marginHorizontal:20,
    marginVertical:0,

    alignItems:"center",
    flexDirection:"column",
    justifyContent: "center",
  },
});

export default Upload;
