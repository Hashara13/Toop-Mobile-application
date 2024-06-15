// ./screens/Home.js

import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';

function HomeScreen() {
    // const [audioPath, setAudioPath] = useState(null);
    // const audioRecorderPlayer = new AudioRecorderPlayer();

    // const pickAudioFile = async () => {
    //     try {
    //       const res = await DocumentPicker.pick({
    //         type: [DocumentPicker.types.audio],
    //       });
    //       setAudioPath(res[0].uri);
    //     } catch (err) {
    //       if (DocumentPicker.isCancel(err)) {
    //         console.log('User cancelled the picker');
    //       } else {
    //         console.error(err);
    //       }
    //     }
    //   };

    // const playAudio = async () => {
    //     if (audioPath) {
    //       await audioRecorderPlayer.startPlayer(audioPath);
    //       audioRecorderPlayer.addPlayBackListener((e) => {
    //         if (e.current_position === e.duration) {
    //           audioRecorderPlayer.stopPlayer();
    //           audioRecorderPlayer.removePlayBackListener();
    //         }
    //       });
    //     }
    //   };
  
    return (
      <View>
        <Text>
          Home
        </Text>
      </View>
    //     <View style={styles.container}>
    //   <Button title="Pick Audio File" 
    //   onPress={pickAudioFile} 
    //   />
    //   {audioPath && (
    //     <View style={styles.audioPlayer}>
    //       <Text style={styles.audioPath}>
    //         {audioPath}
    //         </Text>
    //       <Button title="Play Audio" 
    //       onPress={playAudio} 
    //       />
    //     </View>
    //   )} 
    // </View>
    );
}
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: 16,
//     },
//     audioPlayer: {
//       marginTop: 20,
//       alignItems: 'center',
//     },
//     audioPath: {
//       marginBottom: 10,
//       textAlign: 'center',
//     },
//   });
export default HomeScreen;
