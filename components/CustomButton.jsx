import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, isLoading && styles.disabled, containerStyles]}
      disabled={isLoading}
    >
      <Text style={[styles.text, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9C01', // Use your desired color or import colors if using a theme
    borderRadius: 10, // Customize as needed
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: 'primary', // Customize as needed
    fontWeight: '600',
    fontSize: 18, // Customize size as needed
  },
})

export default CustomButton
