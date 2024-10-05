import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../config/config';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const storeTokens = async (accessToken, refreshToken) => {
    try {
      await AsyncStorage.setItem('@access_token', accessToken);
      await AsyncStorage.setItem('@refresh_token', refreshToken);
    } catch (e) {
      console.error('Error storing tokens:', e);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password || !username) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(`${API_URL}/flappybirdapi/signup`, {
        email,
        password,
        username,
      });

      const { accessToken, refreshToken } = response.data;

      // Store tokens
      await storeTokens(accessToken, refreshToken);

      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => router.push('/game') } // Assuming you want to redirect to the game screen after signup
      ]);
    } catch (error) {
      console.error('Error during sign up:', error);
      const errorMessage = error.response?.data?.message || 'An unexpected error occurred. Please try again.';
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require('C:/Users/Sumit/Projects/ReactNative/FlappyBird/FlappyBird/assets/sprites/background-day.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.textCustom}>FlappyBird</Text>
        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('C:/Users/Sumit/Projects/ReactNative/FlappyBird/FlappyBird/assets/sprites/yellowbird-midflap.png')}
            style={styles.image}
          />

          <View style={styles.loginContainer}>
            <Text style={[styles.welcomeText, styles.spacing]}>WELCOME</Text>

            <TextInput
              style={[styles.input, styles.spacing]}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />

            <TextInput
              style={[styles.input, styles.spacing]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={[styles.input, styles.spacing]}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <CustomButton
              title={isLoading ? "Signing Up..." : "Sign-Up"}
              handlePress={handleSignUp}
              containerStyles={[styles.customButtonContainer, styles.spacing]}
              disabled={isLoading}
            />

            <View style={styles.signinContainer}>
              <Text style={styles.signinText}>Have an account?</Text>
              <Link href="/sign-in" style={styles.signinLink}>
                Signin
              </Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Background handled by ImageBackground
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
    width: '100%',
  },
  textCustom: {
    fontSize: 150,
    fontFamily: 'FlappyBird',
    textAlign: 'center',
    color: 'white',
    marginTop: 40,
  },
  loginContainer: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  customButtonContainer: {
    backgroundColor: '#FF9C01',
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 30,
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  signinText: {
    fontSize: 16,
    color: 'black',
  },
  signinLink: {
    fontSize: 16,
    color: '#FF9C01',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  spacing: {
    marginBottom: 20,
  },
  image: {
    marginTop: 100,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
});

export default SignUp;
