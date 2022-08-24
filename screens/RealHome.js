import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from "react-native-dynamic-search-bar";
const RealHome = () => {
  return (
      <View style={styles.container}>
          <SearchBar style={styles.searchbar}
         placeholder="Search here"
         onPress={() => alert("onPress")}
         onChangeText={(text) => console.log(text)}
    />
    
   
      </View>
  )
}

export default RealHome

const styles = StyleSheet.create({
  container:{
    color: "black",
    backgroundColor: "black",
    flexDirection:'row'
  },
  searchbar: {
    backgroundColor: "#72acc4",
    color: "white",
    fontSize: 30, // increase the size of the text
    height: 50, // increase the height of the text box
    margin: 10, // increase the margin of the text box
    maxWidth: 470, // increase the width of the text box

    
  }
})