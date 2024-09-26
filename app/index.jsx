import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ImageBackground, StyleSheet } from 'react-native'
import CustomButton from '../components/CustomButton'
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <ImageBackground
      source={require("../assets/sprites/background-day.png")}
      style={styles.background}
      >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.view}>
            <Text style={styles.textCustom}>
              FlappyBird
            </Text>
            <Image
             source = {require("../assets/sprites/yellowbird-midflap.png")}
             style = {styles.image}
            />
            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles={styles.customButtonContainer}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
  },
  safeArea: {
    flex: 1,
  },
  scrollView:{
    height:"100%",
  },
  view:{
    flexGrow:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  textCustom:{
    fontSize: 150,
    fontFamily:'FlappyBird',
    marginBottom:150,
    color:'white'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode:'contain',
    marginBottom:200,
  },
  customButtonContainer: {
    backgroundColor: '#FF9C01', // Use your secondary color here
    marginTop: 80,
    width: '80%',
    borderRadius: 10,
    paddingVertical: 15,
  },
});
