import React, { useState } from "react"
import { StyleSheet, View } from "react-native"

import Header from "./components/Header"
import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm"

import { addToListByItem } from "./functions/list"

const INITIAL_TODOS = [
  { id: "1", text: "Buy coffee" },
  { id: "2", text: "Create an app" },
  { id: "3", text: "Play on the switch" }
]

const App = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS)

  const handleAdd = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text
    }
    addToListByItem(newTodo, todos, setTodos)
  }

  return (
    <View style={styles.appContainer}>
      <Header />
      <View style={styles.content}>
        <AddTodoForm handleAdd={handleAdd} />
        <TodoList todos={todos} setTodos={setTodos} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  },
  content: {
    padding: 20
  }
})

export default App
