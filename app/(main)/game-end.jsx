import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const ScoreCard = ({ score, bestScore }) => {
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
    height: height * 0.2,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ScoreCard;
