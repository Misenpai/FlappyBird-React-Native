import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, ActivityIndicator, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../../config/config';


const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('@access_token');
      if (!accessToken) {
        Alert.alert('Error', 'No access token found. Please login again.');
        return;
      }

      const response = await axios.get(`${API_URL}/flappybirdapi/leaderboard`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });

      setLeaderboardData(response.data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      Alert.alert('Error', 'Failed to fetch leaderboard data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.row}>
      <Text style={styles.rank}>{index + 1}</Text>
      <Text style={styles.name}>{item.username}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  if (isLoading) {
    return (
      <ImageBackground
        source={require('../../assets/sprites/background-day.png')}
        style={styles.background}
      >
        <SafeAreaView style={styles.safeArea}>
          <ActivityIndicator size="large" color="#ffffff" />
        </SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../../assets/sprites/background-day.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <Text style={styles.textCustom}>FlappyBird</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Leaderboard</Text>
          <View style={styles.header}>
            <Text style={[styles.headerText, styles.rankHeader]}>Rank</Text>
            <Text style={[styles.headerText, styles.nameHeader]}>Name</Text>
            <Text style={[styles.headerText, styles.scoreHeader]}>Score</Text>
          </View>
          <FlatList
            data={leaderboardData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '60%',
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: '#34495e',
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  rankHeader: {
    flex: 1,
  },
  nameHeader: {
    flex: 2,
  },
  scoreHeader: {
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  rank: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    flex: 2,
    fontSize: 16,
    color: '#fff',
  },
  score: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'right',
  },
  headerContainer: {
    position: 'absolute',
    top: 50,
    alignItems: 'center',
    width: '100%',
  },
  textCustom: {
    fontSize: 60,
    fontFamily: 'FlappyBird',
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
});

export default Leaderboard;