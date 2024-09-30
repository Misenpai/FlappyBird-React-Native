import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const ScoreCard = () => {
  const { score } = useLocalSearchParams();
  const [bestScore, setBestScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (Number(score) > bestScore) {
      setBestScore(Number(score));
    }
  }, [score, bestScore]);

  const handleRestart = () => {
    router.replace('/');
  };

  return (
    <ImageBackground
      source={require('../../assets/sprites/background-day.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.card}>
          <View style={styles.scoreContainer}>
            <Text style={styles.text}>SCORE: {score}</Text>
            <Text style={styles.text}>BEST: {bestScore}</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRestart}>
            <Text style={styles.buttonText}>Restart</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width * 0.8,
    height: height * 0.3,
    backgroundColor: '#2c3e50',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  scoreContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#e74c3c',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScoreCard;