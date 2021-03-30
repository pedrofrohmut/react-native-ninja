import React, { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

const App = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Name:</Text>
        <TextInput
          multiline
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Age:</Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
      {name !== "" && age !== "" && (
        <Text>
          Name: {name}, age: {age}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e9e9",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20
  },
  button: {},
  inputContainer: {
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 20
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 12
  }
})

export default App
