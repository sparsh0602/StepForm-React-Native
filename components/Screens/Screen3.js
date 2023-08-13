import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native'
import React from 'react'

import { useState } from "react";
import CheckBox from 'react-native-check-box'

export default function Screen3(props,{navigation}) {

    const [name, setName] = useState("");
    
    const [onlineChecked, setonlineChecked] = useState(false);
    const [largeChecked, setlargeChecked] = useState(false);
    const [customChecked, setcustomChecked] = useState(false);
    const [plan, setplan] = useState(props.route.params.plan);
    const [timeperiod, settimeperiod] = useState(props.route.params.planTimePeriod)

    

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <ImageBackground source={require('../images/background.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.externalButtonContainer}>
                        <View style={styles.internalButtonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.currentPageButton]}>
                                <Text style={[styles.buttonText, styles.currentPageButton]}>3</Text>
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
                        <Text style={styles.infoContainerHeading}>Pick add-ons</Text>
                        <Text style={styles.infoContainerInfo}>Add-ons help enhance your gaming{'\n'}experience.</Text>

                        <View style={styles.infoInputContainer}>

                            <View style={onlineChecked==false? styles.checkBoxContainer:styles.checkBoxContainerChecked}>
                                <View style={styles.serviceNameContainer}>
                                    <View style={styles.innerCheckBoxContainer}>
                                        <CheckBox isChecked={onlineChecked} onClick={()=>setonlineChecked(!onlineChecked)} uncheckedCheckBoxColor="grey" checkedCheckBoxColor="blue"/>
                                    </View>
                                    <View style={styles.innerCheckboxInfo}>
                                        <Text style={styles.innerCheckboxInfoTextHead}>Online service</Text>
                                        <Text style={styles.innerCheckboxInfoTextSubHead}>Access to multiplayer games</Text>
                                    </View>

                                </View>
                                <View style={styles.serviceChargesContainer}>
                                    <Text style={styles.serviceChargeText}>+$1/mo</Text>
                                </View>

                            </View>

                            <View style={largeChecked==false? styles.checkBoxContainer:styles.checkBoxContainerChecked}>
                                <View style={styles.serviceNameContainer}>
                                    <View style={styles.innerCheckBoxContainer}>
                                    <CheckBox isChecked={largeChecked} onClick={()=>setlargeChecked(!largeChecked)} uncheckedCheckBoxColor="grey" checkedCheckBoxColor="blue"/>
                                    </View>
                                    <View style={styles.innerCheckboxInfo}>
                                        <Text style={styles.innerCheckboxInfoTextHead}>Larger storage</Text>
                                        <Text style={styles.innerCheckboxInfoTextSubHead}>Extra 1TB cloud save</Text>
                                    </View>


                                </View>
                                <View style={styles.serviceChargesContainer}>
                                    <Text style={styles.serviceChargeText}>+$2/mo</Text>
                                </View>

                            </View>

                            <View style={customChecked==false? styles.checkBoxContainer:styles.checkBoxContainerChecked}>
                                <View style={styles.serviceNameContainer}>
                                    <View style={styles.innerCheckBoxContainer}>
                                    <CheckBox isChecked={customChecked} onClick={()=>setcustomChecked(!customChecked)} uncheckedCheckBoxColor="grey" checkedCheckBoxColor="blue"/>
                                    </View>
                                    <View style={styles.innerCheckboxInfo}>
                                        <Text style={styles.innerCheckboxInfoTextHead}>Customizable profile</Text>
                                        <Text style={styles.innerCheckboxInfoTextSubHead}>Custom theme on your profile</Text>
                                    </View>


                                </View>
                                <View style={styles.serviceChargesContainer}>
                                    <Text style={styles.serviceChargeText}>+$2/mo</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                </View>
            </View>
            <View style={styles.bottom}>
                <View style={styles.insideBottomContainerBackButton}>
                    <TouchableOpacity style={styles.goBackbutton}>
                        <Text style={styles.goBackbuttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.insideBottomContainerNextButton}>
                    <TouchableOpacity style={styles.Nextbutton} onPress={() => navigation.navigate('Finishing-Up'),{onlineChecked:onlineChecked,largeChecked:largeChecked,customChecked:customChecked,plan:plan,timeperiod:timeperiod}}>
                        <Text style={styles.NextbuttonText}>Next Step</Text>
                    </TouchableOpacity>
                </View>


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
        flexDirection: 'row',

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
        borderRadius: 5
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
    image: {
        width: '100%',
        height: '100%'
    },
    currentPageButton: {
        backgroundColor: '#A7C7E7',
        color: 'black'
    },
    insideBottomContainerBackButton: {
        width: "45%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    goBackbutton: {
        padding: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        borderRadius: 5
    },
    goBackbuttonText: {
        color: 'grey',
        fontWeight: '500',
        fontSize: 13

    },
    insideBottomContainerNextButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    Nextbutton: {
        backgroundColor: '#00008B',
        padding: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        borderRadius: 5
    },
    NextbuttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    changePlanText: {
        color: 'gray',
        textDecorationLine: 'underline'
    },
    checkBoxContainer: {
        height: '30%',
        width: '100%',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },
    checkBoxContainerChecked: {
        height: '30%',
        width: '100%',
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 7,
        display: 'flex',
        flexDirection: 'row'
    },
    serviceNameContainer: {
        height: '100%',
        width: '75%',
        
        display: 'flex',
        alignItems: 'center',
        
        flexDirection: 'row'
    },
    serviceChargesContainer: {
        height: '100%',
        width: '25%',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    serviceChargeText: {
        color: '#00008B',
        fontSize: 12,
        fontWeight: '600'
    },
    innerCheckBoxContainer: {
        width: '25%',
        height: '100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    innerCheckboxInfoTextHead:{
        color: '#00008B',
        fontWeight:'700',
        fontSize:12
    },
    innerCheckboxInfoTextSubHead:{
        color: 'gray',
        fontSize:10,
    },
    innerCheckboxInfo:{
        display:'flex',
        justifyContent:'flex-start',
    
    },




});

