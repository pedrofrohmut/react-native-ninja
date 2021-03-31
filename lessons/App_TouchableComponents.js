import React, { useState } from "react"
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native"

const INITIAL_PEOPLE = [
  { name: "Shaun", id: 1 },
  { name: "Yoshi", id: 2 },
  { name: "Mario", id: 3 },
  { name: "Luigi", id: 4 },
  { name: "Peach", id: 5 },
  { name: "Toad", id: 6 },
  { name: "Bowser", id: 7 },
  { name: "Person 1", id: 8 },
  { name: "Person 2", id: 9 },
  { name: "Person 3", id: 10 },
  { name: "Person 4", id: 11 },
  { name: "Person 5", id: 12 },
  { name: "Person 6", id: 13 },
  { name: "Person 7", id: 14 }
]

const handleOnPress = (personId, people, setPeople) =>
  setPeople(people.filter((p) => p.id !== personId))

/*
 * FROM DOCS
 * FlatList works well for long lists of data, where the number of items might change
 * over time. Unlike the more generic ScrollView, the FlatList only renders elements
 * that are currently showing on the screen, not all the elements at once.
 */
const App = () => {
  const [people, setPeople] = useState(INITIAL_PEOPLE)
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(person) => person.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleOnPress(item.id, people, setPeople)}>
            <Text style={styles.listItem}>
              {item.id} - {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9f9e9",
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 0
  },
  listItem: {
    padding: 15,
    backgroundColor: "#ded",
    marginBottom: 15,
    marginRight: 12,
    fontSize: 22
  }
})

export default App
