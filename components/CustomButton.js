import { View, Text, StyleSheet, Pressable } from 'react-native'

import { COLORS, FONTS, SIZES, assets } from "../constants";

const CustomButton = ({onPress, text, type="PRIMARY"}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 10
  },
  container_PRIMARY: {
    backgroundColor: '#2196f3'
  },
  container_TERTIARY: {
    
  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  text_TERTIARY: {
    color: COLORS.gray
  },
  container_DOB: {
    alignItems: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'black',
    borderWidth:1,
    borderRadius: 20,
    padding:10,
    marginVertical:10
  },
  text_DOB: {
    color: '#bbbbbb',
    fontWeight: 'normal'
  }
})
export default CustomButton