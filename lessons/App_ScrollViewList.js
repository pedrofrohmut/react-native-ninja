import React, { useState } from "react"
import { FlatList, StyleSheet, ScrollView, Text, View, Button } from "react-native"

const INITIAL_PEOPLE = [
  { name: "Shaun", key: 1 },
  { name: "Yoshi", key: 2 },
  { name: "Mario", key: 3 },
  { name: "Luigi", key: 4 },
  { name: "Peach", key: 5 },
  { name: "Toad", key: 6 },
  { name: "Bowser", key: 7 },
  { name: "Person 1", key: 8 },
  { name: "Person 2", key: 9 },
  { name: "Person 3", key: 10 },
  { name: "Person 4", key: 11 },
  { name: "Person 5", key: 12 },
  { name: "Person 6", key: 13 },
  { name: "Person 7", key: 14 }
]

const Person = ({ name, id }) => (
  <Text
    style={{
      padding: 15,
      backgroundColor: "#ded",
      marginBottom: 15,
      fontSize: 22
    }}
  >
    {id} - {name}
  </Text>
)

const App = () => {
  const [people] = useState(INITIAL_PEOPLE)
  return (
    <ScrollView style={styles.container}>
      {people.map((person) => (
        <Person key={person.key} id={person.key} name={person.name} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f9e9",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 10
  }
})

export default App
