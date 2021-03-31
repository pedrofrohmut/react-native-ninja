import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

const TodoListItem = ({ id, text, handleDelete }) => (
  <TouchableOpacity style={styles.item} onPress={() => handleDelete(id)}>
    <Text style={styles.text}>{id} - {text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginBottom: 16,
    borderColor: "#d7d7d7",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8
  },
  text: {}
})

export default TodoListItem
