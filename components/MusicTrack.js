import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { OwnList } from '../constants/OwnList';
import COLORS from "../constants/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';


const MusicTrack = ({ trackName, downloads, shares, earnings, author, onPlay }) => {
    return (
        <SafeAreaView>
        
        <View style={styles.card}>
            
            <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.playButton} onPress={onPlay}>
                <Ionicons name="play-circle-sharp" size={30} color={COLORS.primary}/>
                </TouchableOpacity>
                <Text style={styles.cardTitle}>
                    {trackName}
                </Text>
            
              
              
            
            </View>
            <View style={styles.infoContainer2}>
            <Text style={styles.authorText}>
                <Icon name="user" size={20} style={styles.icon} />
              {author}
            </Text>
            </View>
            <View style={styles.infoContainer}>
        
                <Text style={styles.cardText}>
                    <Icon name="download" size={20} style={styles.icon} />
                    {downloads}
                </Text>
                <Text style={styles.cardText}>
                    <Icon name="share-alt" size={20} style={styles.icon} />
                    {shares}
                </Text>
                <Text style={styles.cardText}>
                    <Icon name="dollar" size={20} style={styles.icon} />
                    {earnings}
                </Text>
            </View>
            
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.actionButton}>
                    <Text style={styles.buttonText}>Add to Playlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton2}>
                    <Text style={styles.buttonText2}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
        </SafeAreaView>
    );
};

const Mymusic = () => {
  const handlePlay = (trackName) => {
    console.log(`Playing track: ${trackName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {OwnList.map((track) => (
        <MusicTrack
          key={track.id}
          trackName={track.trackName}
          downloads={track.downloads}
          shares={track.shares}
          earnings={track.earnings}
          author={track.author}
          onPlay={() => handlePlay(track.trackName)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: 6,
    },
    card: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:0,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 1,
    },
    playButton: {
       marginRight:10,
       marginLeft:0,
        borderRadius: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginHorizontal:0,
        alignItems: 'center',
    },
    infoContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 0,
        marginLeft:5,
    },
    cardText: {
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal:0,
    },
    authorText: {
        fontSize: 16,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        color:COLORS.grey2
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    actionButton: {
        backgroundColor: COLORS.white,
        padding: 6,
        paddingLeft: 6,
       borderColor:COLORS.black,
        marginTop:7,
        borderRadius: 8,
        flex: 1,
        borderWidth: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText: {
        color:COLORS.black,
    },
    actionButton2: {
        backgroundColor:COLORS.black2,
        padding: 6,
        paddingLeft: 6,
       borderColor:COLORS.blac2,
        marginTop:7,
        borderRadius: 8,
        flex: 1,
        borderWidth: 1,
        marginHorizontal: 5,
        alignItems: 'center',
    },
    buttonText2: {
        color:COLORS.white,
    },
});

export default Mymusic;
