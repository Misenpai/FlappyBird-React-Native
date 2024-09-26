import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
    return (
        <ImageBackground 
            source={require('C:/Users/Sumit/Projects/ReactNative/FlappyBird/FlappyBird/assets/sprites/background-day.png')}
            className="flex-1"
        >
            <SafeAreaView className="flex-1">
                <ScrollView contentContainerClassName="flex-grow">
                    <View className="flex-1 justify-center items-center">
                        {/* Your sign-in form components go here */}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}


export default SignIn;
