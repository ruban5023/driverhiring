import {StyleSheet, Text, TextInput, TouchableOpacity, View,ImageBackground} from 'react-native';
import React from 'react';
import dh from '../assets/commonbg.png'

const Driverslogin = ({navigation}) => {
    return (
        
        <ImageBackground source={dh} style={styles.container} behavior='padding'>
        <View style={styles.inputcontainer}>
        <TextInput
            placeholder="email"
            style={styles.input}
            // value={ }
            // onChangeText={Text=>}

                        />
        
        <TextInput 
            placeholder="password"
            style={styles.input}
                        // value={ }
                        // onChangeText={Text=>} 
                        secureTextEntry />
        </View>
        <View style={styles.buttoncontainer}>
        <TouchableOpacity style={[styles.button,styles.buttonoutline]}
        onPress={()=>{}}>
         
        <Text style={[styles.button,styles.buttontext1]}>login</Text>
        
       </TouchableOpacity>
       <TouchableOpacity style={[styles.button,styles.buttonoutline1]}
       onPress={()=>{navigation.navigate('Driverregister')}}>
       <Text style={[styles.button1,styles.buttontext]}>New User? Sign up</Text>
        
       </TouchableOpacity>

                </View>  
    

    </ImageBackground>
            
  );
}

export default Driverslogin

const styles = StyleSheet.create({
    container:{
       alignItems:"center",
       justifyContent:"center",
       flex:1,
    },
    
    inputcontainer :{
        width: '80%',
        color: "black",
        
    },
    input: {
        backgroundColor: "black",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    button:{
        backgroundColor: "white",
        width:'100%',
        borderRadius: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent:'center'

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
        justifyContent:'center'
    },
    buttoncontainer: { 
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
        alignItems: 'center',
        padding:20


    
    },
    buttontext: {
        color: "black",
        fontWeight: '800',
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttontext1: {
        color: "black",
        fontWeight: '800',
        fontSize: 16,
        alignContent: 'center',
        justifyContent: 'center'
    },
    buttonoutlinetext: {
        color: "white",
        fontWeight: '700',
        fontSize: 16,
        alignContent: 'center',
        justifyContent:'center'
    },

});