import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import dh from '../assets/new.jpeg'
import {setDoc,doc,addDoc,collection} from "firebase/firestore";
import { db} from '../firebase-config';
import { useState } from 'react';

const Registerfordriver = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [licensenumber, setLicensenumber] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [password,setPassword]=useState('')
  
  function create() {
    setDoc(doc(db,"user","d1"),{
      email: email,
      name: name,
      age: age,
      licensenumber: licensenumber,
      district: district,
      city: city,
      password: password,
      
      }).then(() => {
        alert("submiited")
        console.log("data submitted");
      })
      .catch((error) => {
        alert(error)
      });;
     
  }
  
  return (
      
    <ImageBackground source={dh} style={styles.container} behavior='padding'>
      
      <View style={styles.inputcontainer}>
      <TextInput
          placeholder="email"
          style={styles.input}
          value={email}
          onChangeText={email=>setEmail(email)}
        />
        <TextInput
          placeholder="name"
          style={styles.input}
          value={name}
        onChangeText={name=>setName(name)}
        /> 
        <TextInput
          placeholder="age"
          style={styles.input}
          value={age}
        onChangeText={age=>setAge(age)}
        />
        <TextInput
          placeholder="driver license number"
          style={styles.input}
          value={licensenumber}
          onChangeText={licensenumber=>setLicensenumber(licensenumber)}
        />
        
        <TextInput
          placeholder="district"
          style={styles.input}
          value={district}
          onChangeText={district=>setDistrict(district)}
        />
        <TextInput
          placeholder="city"
          style={styles.input}
          value={city}
          onChangeText={city=>setCity(city)}
        />
      <TextInput 
          placeholder="password"
          style={styles.input}
                      value={password}
                      onChangeText={password=>setPassword(password)} 
                      secureTextEntry />
      
      <View style={styles.buttoncontainer}>
      
              <TouchableOpacity style={[styles.button, styles.buttonoutline1]}
              onPress={create}>
     <Text style={[styles.button,styles.buttontext1]}>New User? Sign up</Text>
      
     </TouchableOpacity>

        </View>  
        </View>
        

  </ImageBackground>
      
          
);
}

export default Registerfordriver

const styles = StyleSheet.create({
  container:{
     alignItems:"center",
     justifyContent:"flex-end",
     flex:1,
  },
  
  inputcontainer :{
      width: '80%',
      color: "black",
      height: '20%',
      marginBottom: 0,
    height: 500,
    alignContent: 'center',
    justifyContent: 'center',
      padding:40
       
      

      
  },
  input: {
      backgroundColor: "black",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
      opacity:0.5
  },
  button:{
      width:'100%',
      borderRadius: 10,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      padding: 1,
      shadowColor: 'orange',
      shadowOpacity: 0.8,
      elevation: 6,
      backgroundColor : "#0000",
      shadowRadius: 15 ,
      shadowOffset : { width: 56, height: 13},
      borderWidth:0,
      borderRadius:0,

  },
  button1:{
      backgroundColor: "white",
      width:'100%',
      borderRadius: 10,
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      color:"black"

  },
  buttonoutline:{
      marginTop: 5,
      borderColor: "black",
      borderWidth:2,
      padding: 1,
      width: '20%',
      alignContent: 'center',
      justifyContent: 'center',
  },
  buttonoutline1:{
      marginTop: 5,
      borderColor: "black",
      borderWidth:2,
      width: '40%',
      alignContent: 'center',
      justifyContent: 'center',
  },
  buttoncontainer: { 
      width: '100%',
      justifyContent: 'center',
      alignContent: 'center',
      marginTop: 60,
      alignItems: 'center',
      padding: 20


  
  },
  buttontext: {
      color: "white",
      fontWeight: '800',
      fontSize: 16,
      alignContent: 'center',
      justifyContent: 'center'
  },
  buttontext1: {
      color: 'white',
      fontWeight: '800',
      fontSize: 12,
      alignContent: 'center',
      justifyContent: 'center',
  },
  buttonoutlinetext: {
      color: "white",
      fontWeight: '700',
      fontSize: 16,
      alignContent: 'center',
      justifyContent:'center'
  },

});
