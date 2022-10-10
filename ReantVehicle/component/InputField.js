import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function InputField(label, icon, inputType, keyboardType, fieldButtonLabel, fieldButtonFunction,) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
      }}>
      {/* {icon} */}
      {inputType == 'password' ? (
        <TextInput
          placeholder='Password'
          // keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
          secureTextEntry={true}
        />
      ) : (
        <TextInput
          placeholder='Email ID'
          // keyboardType={keyboardType}
          style={{flex: 1, paddingVertical: 0}}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: '#AD40AF', fontWeight: '700'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  )
}