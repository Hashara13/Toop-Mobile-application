// import React from "react";
// import {
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   View,
//   TextInput,
//   ScrollView,
// } from "react-native";
// import COLORS from "../constants/colors";
// import CatList from "../constants/CatList";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
// import { TrendsList } from "../constants/TrendList";
// import { colors } from "react-native-elements";

// const Trending = ({ icon, placeholder }) => {
//     return (
//       <View style={styles.Container}>
//         <Text style={styles.HeaderText}>Trending</Text>
//         <ScrollView >
//           {TrendsList.map((id,Song,Artist) => {
//             return (
//                 <View
//             key={id} // Use key prop for unique identification
//             style={{
//               paddingVertical: 10,
//               paddingHorizontal: 10,
//               marginHorizontal: 10,
//               shadowColor: COLORS.black,
//               shadowOffset: { width: 1, height: 2 },
//               shadowOpacity: 0.3,
//               borderRadius: 7,
//               shadowRadius: 7,
//               marginVertical: 10,
//               flexDirection: "row",
//               justifyContent: "space-between",
//               backgroundColor: id === "01" ? COLORS.black : COLORS.white, 
//             }}
//           >  <View style={styles.textContainer}> 
//           <Text style={{ color: id === "01" ? COLORS.white : COLORS.black, fontSize: 16 }}>
//             {Song.category} 
//           </Text>
//           <Text style={{ color: id === "01" ? COLORS.white : COLORS.black, fontSize: 16 }}>
//             {/* {Artist} */}
//           </Text>
//         </View>
//               </View>
//             );
//           })}
//         </ScrollView>
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     Container: {
//       paddingVertical: 12,
//       marginHorizontal: 10,
//       marginVertical: 1,
//     },
//     textContainer: { // Added text container styles
//         marginLeft: 10,
//         justifyContent: 'center',
//       },
   
//     SearchText: {
//       fontSize: 14,
//       paddingLeft: 9,
//       color: "#848884",
//     },
//     HeaderText: {
//       fontSize: 22,
//       color: COLORS.primary,
//       fontWeight: 700,
//       paddingLeft: 9,
//       paddingTop: 8,
//     },
//   });
//   export default Trending;

import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image, 
} from "react-native";
import COLORS from "../constants/colors";

import { TrendsList } from "../constants/TrendList"; // Correct import path for TrendsList

const Trending = () => {
  return (
   

 
    <View style={styles.Container}>
      <Text style={styles.HeaderText}>Trending</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {TrendsList.map(({ id,img, Song, Artist }) => ( 
              

         
          <View
            key={id} 
            style={{
              paddingTop: 32,
              paddingBottom: 40,
              paddingHorizontal: 40,
              marginHorizontal: 10,
              shadowColor: COLORS.black,
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 12,
              shadowRadius: 7,
              marginVertical: 10,
              flexDirection:"column",
              justifyContent: "space-between",
              backgroundColor:COLORS.black
            }}
          >
            <Image source={{ uri: img }} style={styles.image} /> 
           
            <View style={styles.textContainer}> 
              <Text style={{ color: COLORS.white , fontSize: 20 }}>
                {Song}
              </Text>
              <Text style={{ color: COLORS.white , fontSize: 14}}>
                {Artist} 
              </Text>
            </View>
          </View>
  
        ))}
      </ScrollView>
      <Text style={styles.HeaderText}>Trending</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {TrendsList.map(({ id,img, Song, Artist }) => ( 
              

         
          <View
            key={id} 
            style={{
              paddingTop: 30,
              paddingBottom: 40,
              paddingHorizontal: 40,
              marginHorizontal: 10,
              shadowColor: COLORS.black,
              shadowOffset: { width: 1, height: 2 },
              shadowOpacity: 0.5,
              borderRadius: 12,
              shadowRadius: 7,
              marginVertical: 10,
              flexDirection:"column",
              justifyContent: "space-between",
              backgroundColor:COLORS.black
            }}
          >
            <Image source={{ uri: img }} style={styles.image} /> 
           
            <View style={styles.textContainer}> 
              <Text style={{ color: COLORS.white , fontSize: 20 }}>
                {Song}
              </Text>
              <Text style={{ color: COLORS.white , fontSize: 14}}>
                {Artist} 
              </Text>
            </View>
          </View>
  
           ))}
      </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 1,
    marginVertical:0,
    marginHorizontal: 12,
    
  },
  HeaderText: {
    fontSize: 22,
    color: COLORS.primary,
    fontWeight: "700", 
    paddingLeft: 9,
    paddingTop: 8,
  },
  image: { 
    marginTop:0,
    width: 150,
    height: 150,
   
    resizeMode: "cover",
    borderRadius: 8,
  },

  textContainer: { 
   
    marginTop:15,
    justifyContent: "center",
  },
});

export default Trending;
