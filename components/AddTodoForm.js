import React, { useState } from "react"
import {Button, StyleSheet, TextInput, View} from "react-native"

const AddTodoForm = ({ handleAdd }) => {
  const [text, setText] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="New Todo"
        value={text}
        onChangeText={t => setText(t)}
      />
      <Button title="Add" color="coral" onPress={() => handleAdd(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: "#d7d7d7"
  }
})

export default AddTodoForm
