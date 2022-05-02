import { View, Text, TextInput} from 'react-native'
import React from 'react'

export default function TextInputBox() {
  return (
    <View>
      <TextInput
        style={{height: 40}}
        placeholder="Escribe tu mensaje..."
      />
    </View>
  )
}