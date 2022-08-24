import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import React from 'react';
import dh from '../assets/new.jpeg'
const HomeScreen = () => {
  return (
    <ImageBackground source={dh} style={styles.container}>
    <View>
      <Text>HomeSceen hello Iam ruban</Text>
    </View>
      </ImageBackground>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    height: null,
    width: null
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50
    
  }
});


