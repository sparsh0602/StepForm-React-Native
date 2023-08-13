import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function Screen1({navigation}) {
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const [phNumber, setphNumber] = useState("")

    function ValidatePhNumber(number)
        {

            for(let i=0;i<number.length;i++)
            {
                if(number[i]<'0' || number[i]>'9' || number.length!=10)
                    return false;
            }

            return true;

        }

    function validateEmail(Email) {
        var atPos = Email.indexOf("@");
        var dotPos = Email.lastIndexOf(".");
        return atPos > 0 && dotPos > atPos + 1 && dotPos < Email.length - 1;
      }

    function nextStepButtonPressed(){
        if(name=="" || email=="" || phNumber=="")
        Alert.alert('All Fields are mandatory')
        else if(validateEmail(email)==false)
        Alert.alert('Invalid Email')
        else if(ValidatePhNumber(phNumber)==false)
        Alert.alert('Enter Valid Phone Number');
        else 
        navigation.navigate('Select-Plan')
          
    }
    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <ImageBackground source={require('../images/background.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.externalButtonContainer}>
                        <View style={styles.internalButtonContainer}>
                            <TouchableOpacity style={[styles.button,styles.currentPageButton]}>
                                <Text style={[styles.buttonText,styles.currentPageButton]}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>4</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </View>




            <View style={styles.middle}>
                <View style={styles.infoContainer}>
                    <View style={styles.innerInfoContainer}>
                        <Text style={styles.infoContainerHeading}>Personal info</Text>
                        <Text style={styles.infoContainerInfo}>Please provide your name, email{'\n'}address and phone number.</Text>

                        <View style={styles.infoInputContainer}>

                            <View>
                                <Text style={styles.infoContainerLabel}>Name</Text>
                                <TextInput
                                    placeholder="e.g Stephen King"
                                    placeholderTextColor={'gray'}
                                    value={name}
                                    onChangeText={(text) => setName(text)}
                                    style={styles.nameInput}
                                    color="black"
                                />
                            </View>

                            <View>
                                <Text style={[styles.infoContainerLabel, styles.infoContainerLabelSpacing]}>Email Address</Text>
                                <TextInput
                                    placeholder="e.g stephenking@loream.com"
                                    placeholderTextColor={'gray'}
                                    value={email}
                                    onChangeText={(text) => setemail(text)}
                                    style={styles.nameInput}
                                    color="black"
                                />
                            </View>

                            <View>
                                <Text style={[styles.infoContainerLabel, styles.infoContainerLabelSpacing]}>Phone Number</Text>
                                <TextInput
                                    placeholder="e.g +1 234 567 890"
                                    placeholderTextColor={'gray'}
                                    value={phNumber}
                                    onChangeText={(text) => setphNumber(text)}
                                    style={styles.nameInput}
                                    color="black"
                                    keyboardType = 'numeric'
                                />
                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.bottom}>
                <TouchableOpacity style={styles.Nextbutton} onPress={()=>nextStepButtonPressed()}>
                    <Text style={styles.NextbuttonText}>Next Step</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    top: {
        backgroundColor: 'red',
        height: '25%',
        display: 'flex',
        alignItems: 'center',

    },
    middle: {
        backgroundColor: '#e0edfe',
        height: '62%',
        display: 'flex',
        alignItems: 'center'
    },
    bottom: {
        backgroundColor: 'white',
        height: '13%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {

        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 1.2,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,


    },
    internalButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: 150,


    },
    externalButtonContainer: {
        width: '100%',
        height: '52%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    infoContainer: {
        backgroundColor: '#FAF9F6',
        width: '90%',
        height: '80%',
        position: 'absolute',
        top: '-20%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    innerInfoContainer: {
        width: '85%',
        height: '88%',
        // backgroundColor:'purple',
        top: '2%'
    },
    infoContainerHeading: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#00008B'

    },
    infoContainerInfo: {
        color: 'grey',
        marginTop: '3%'
    },
    nameInput: {

        color: 'white',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5
    },
    infoContainerLabel: {
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#00008B',
        marginBottom: '1%',
        fontWeight: '600'


    },
    infoInputContainer: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 190,

    },
    Nextbutton: {
        backgroundColor: '#00008B',
        padding: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: '8%',
        borderRadius: 5
    },
    NextbuttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    image:{
        width:'100%',
        height:'100%'
    },
    currentPageButton:{
        backgroundColor:'#A7C7E7',
        color:'black'
    },
 


});

