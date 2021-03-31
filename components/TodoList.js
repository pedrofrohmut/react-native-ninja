import React from "react"
import { View, FlatList } from "react-native"

import TodoListItem from "./TodoListItem"

import { deleteFromListById } from "../functions/list"

const TodoList = ({ todos, setTodos }) => {
  const handleDelete = (id) => {
    deleteFromListById(id, todos, setTodos)
  }

  return (
    <View>
      <FlatList
        keyExtractor={(todo) => todo.id}
        data={todos}
        renderItem={({ item }) => (
          <TodoListItem id={item.id} text={item.text} handleDelete={handleDelete} />
        )}
      />
    </View>
  )
}

export default TodoList
