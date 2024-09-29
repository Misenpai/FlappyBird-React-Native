import { View, Text, ImageBackground, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';

const GameHome = () => {
  return (
    <ImageBackground
      source={require("../../assets/sprites/background-day.png")}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.view}>
            <Text style={styles.textCustom}>FlappyBird</Text>
            <Image
              source={require("../../assets/sprites/yellowbird-midflap.png")}
              style={styles.image}
            />
            {/* Add a container for the images and set flexDirection to 'row' */}
            <View style={styles.imageRow}>
              <TouchableOpacity onPress={()=> router.push('/(game)')}>
              <Image
                source={require("../../assets/images/play_cion.png")}
                style={styles.image}
              />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/leaderboard-screen')}>
                <Image
                  source={require("../../assets/images/leaderboard_icon.png")}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    height: '100%',
  },
  view: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCustom: {
    fontSize: 150,
    fontFamily: 'FlappyBird',
    marginBottom: 150,
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 200,
  },
  // New style for the image row
  imageRow: {
    flexDirection: 'row', // Display images horizontally
    justifyContent: 'space-around', // Space between images
    alignItems: 'center',
    width: '100%', // Ensure the row takes full width
    marginTop: -100, // Adjust the margin to place the row properly
  },
});

export default GameHome;
