import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username,setUsername] = useState('')

  const handleLogin = () => {
    console.log('Username:', username,'Email:', email, 'Password:', password);
  };

  return (
    <ImageBackground
      source={require('C:/Users/Sumit/Projects/ReactNative/FlappyBird/FlappyBird/assets/sprites/background-day.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Text positioned at the top */}
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
              secureTextEntry
              value={username}
              onChangeText={(text) => setUsername(text)}
            />

            <TextInput
              style={[styles.input, styles.spacing]}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              style={[styles.input, styles.spacing]}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <CustomButton
              title="Sign-Up"
              handlePress={() => router.push('/sign-in')}
              containerStyles={[styles.customButtonContainer, styles.spacing]}
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
    top: 50, // Adjust the top value to control how far down the text is
    alignItems: 'center',
    width: '100%',
  },
  textCustom: {
    fontSize: 150, // Adjusted to fit the screen better
    fontFamily: 'FlappyBird',
    textAlign: 'center', // Centered horizontally
    color: 'white',
    marginTop:40
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
    marginTop:100,
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30, // Adjusted spacing between image and text
  },
});

export default SignUp;
