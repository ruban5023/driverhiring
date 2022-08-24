import { StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground} from 'react-native';
import React, { useState } from 'react';
import dh from '../assets/new.jpeg'
import { authentication } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const Registerin = () =>
    {
        
        createUserWithEmailAndPassword(authentication, email, password)
            .then((re) => {
                
            console.log(re);
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                  console.log('That email address is already in use!');
                }
            
                if (error.code === 'auth/invalid-email') {
                  alert('That email address is invalid!');
                }
       
            }
            )
        }
    
    return (
        
        <ImageBackground source={dh} style={styles.container} behavior='padding'>
        <View style={styles.inputcontainer}>
        <TextInput
            placeholder="email"
            style={styles.input}
            value={email}
            onChangeText={Text=>setEmail(Text)}/>
        
        <TextInput 
            placeholder="password"
            style={styles.input}
                        value={password}
                        onChangeText={Text=>setPassword(Text)} 
                        secureTextEntry />
       
        <View style={styles.buttoncontainer}>
        <TouchableOpacity style={[styles.button,styles.buttonoutline]}
        onPress={Registerin} >
         
        <Text style={[styles.button,styles.buttontext1]}>login</Text>
        
                </TouchableOpacity>
                </View>
                </View>
            <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('Driverregister')} style={[styles.button, styles.buttonoutline1]}>
       <Text style={[styles.button,styles.buttontext1]}>New User? Sign up</Text>
        
       </TouchableOpacity>

        </View>  
    

    </ImageBackground>
        
            
  );
}

export default LoginScreen

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
        height: 390,
        alignContent: 'center',
        justifyContent: 'center',
        padding:2

        
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
        borderRadius: 0,

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
        marginTop: 5,
        alignItems: 'center',
        padding:20,


    
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