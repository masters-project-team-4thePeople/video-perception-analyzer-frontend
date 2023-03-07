import { View, Text, TextInput, StyleSheet, Keyboard } from 'react-native'
import React from 'react'



const CustomInput = ({value, setValue, placeholder, secureTextEntry, editable}) => {

  return (
    <View style={styles.container}>
      <TextInput 
      value= {value}
      onChangeText={setValue}
      placeholder={placeholder} style={styles.input}
      secureTextEntry={secureTextEntry}
      editable={editable}
      clearButtonMode="always"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: 'black',
        borderWidth:1,
        borderRadius: 20,
        padding:10,
        marginVertical:10
    },
    input: {
    }
})
export default CustomInput