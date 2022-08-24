import { StyleSheet,View, ImageBackground,Text,Button} from 'react-native'
import React from 'react'
import dh from '../assets/home.png'
const Indexx = ({navigation}) => {
    return (
        <ImageBackground source={dh} style={styles.container} >
            <View style={styles.fixToText}>
                <Button onPress={()=>navigation.navigate('Driverlogin')} title="DRIVERS -click here" style={{ width:'20%'}}></Button>
            
                <Button onPress={()=>navigation.navigate('Login')} title="CAR OWNERS -CLICKHERE" ></Button>
            </View>
            </ImageBackground>
         
  )
}



export default Indexx

const styles = StyleSheet.create({
    body: {
        backgroundColor:"dodgerblue"
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    container:{
        alignContent: "center",
        justifyContent: "center",
        flex: 1,
        height: null,
        width: null
      }
})