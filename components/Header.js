import React from "react"
import {StyleSheet, Text, View} from "react-native"

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>My Todos</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "coral",
    height: 80,
    paddingTop: 34
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#f3f3f3"
  }
})

export default Header
