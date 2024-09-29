import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const data = [
  { id: '1', name: 'Sumit', score: 90 },
  { id: '2', name: 'Sumit', score: 90 },
  { id: '3', name: 'Sumit', score: 90 },
  { id: '4', name: 'Sumit', score: 90 },
  { id: '5', name: 'Sumit', score: 90 },
  { id: '6', name: 'Sumit', score: 90 },
  { id: '7', name: 'Sumit', score: 90 },
  { id: '8', name: 'Sumit', score: 90 },
  { id: '9', name: 'Sumit', score: 90 },
  { id: '10', name: 'Sumit', score: 90 },
];

const Leaderboard = () => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require('../../assets/sprites/background-day.png')} // Your background image path
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        

            <View style={styles.headerContainer}>
            <Text style={styles.textCustom}>FlappyBird</Text>
            </View>
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Name</Text>
                <Text style={styles.headerText}>Score</Text>
            </View>

            {/* FlatList automatically scrolls, so no need to wrap in ScrollView */}
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
    height:'60%', // Ensure the container takes full height
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  score: {
    fontSize: 18,
    color: '#fff',
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
});

export default Leaderboard;
