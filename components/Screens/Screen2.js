import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Switch } from 'react-native'
import React from 'react'
import { useState } from "react";
import { Stack, Avatar } from "@react-native-material/core";
export default function Screen2({navigation}) {

    const [name, setName] = useState("");
    const [plan, setPlan] = useState("Arcade");
    const [isEnabled, setIsEnabled] = useState(false);
    const [planTimePeriod, setplanTimePeriod] = useState("Monthly")
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        if (planTimePeriod == "Monthly")
            setplanTimePeriod("Yearly")

        else
            setplanTimePeriod("Monthly");

    }
    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <ImageBackground source={require('../images/background.png')} resizeMode="cover" style={styles.image}>
                    <View style={styles.externalButtonContainer}>
                        <View style={styles.internalButtonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>1</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.currentPageButton]}>
                                <Text style={[styles.buttonText, styles.currentPageButton]}>2</Text>
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
                        <Text style={styles.infoContainerHeading}>Select your plan</Text>
                        <Text style={styles.infoContainerInfo}>You have the option of monthly or{'\n'}yearly billing.</Text>
                        <View style={styles.selectPlanButtonOuterContainer}>
                            <View style={styles.infoInputContainer}>

                                <View style={plan == "Arcade" ? styles.selectPlanButtonContainerBlueBorder : styles.selectPlanButtonContainerGrayBorder} onStartShouldSetResponder={
                                    () => { setPlan("Arcade"); }
                                }>
                                    <View style={styles.selectPlanIconContainer}>
                                        <Avatar label="" color="#f4c430" size={40} />
                                    </View>

                                    <View style={styles.selectPlanIconNameContainer}>
                                        <Text style={styles.selectPlanIconName}>Arcade</Text>
                                        <Text style={styles.selectPlanIconPrice}>$9/mo</Text>
                                    </View>

                                </View>

                                <View style={plan == "Advanced" ? styles.selectPlanButtonContainerBlueBorder : styles.selectPlanButtonContainerGrayBorder} onStartShouldSetResponder={
                                    () => { setPlan("Advanced") }
                                }>
                                    <View style={styles.selectPlanIconContainer}>
                                        <Avatar label="" color="#FC8EAC" size={40} />
                                    </View>

                                    <View style={styles.selectPlanIconNameContainer}>
                                        <Text style={styles.selectPlanIconName}>Advanced</Text>
                                        <Text style={styles.selectPlanIconPrice}>$12/mo</Text>
                                    </View>

                                </View>

                                <View style={plan == "Pro" ? styles.selectPlanButtonContainerBlueBorder : styles.selectPlanButtonContainerGrayBorder} onStartShouldSetResponder={
                                    () => { setPlan("Pro") }
                                }>
                                    <View style={styles.selectPlanIconContainer}>
                                        <Avatar label="" color="#00008B" size={40} />
                                    </View>

                                    <View style={styles.selectPlanIconNameContainer}>
                                        <Text style={styles.selectPlanIconName}>Pro</Text>
                                        <Text style={styles.selectPlanIconPrice}>$15/mo</Text>
                                    </View>
                                </View>
                                <View style={styles.selectPlanToggleButtonContainer}>
                                    <View style={styles.selectPlanToggleButtonInnerContainer}>
                                        <Text style={planTimePeriod=="Monthly"?styles.timePeriodButtonBlue:styles.timePeriodButtonGray}>Monthly</Text>
                                        <Switch
                                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                                            thumbColor='white'
                                            ios_backgroundColor="#00008B"
                                            onValueChange={toggleSwitch}
                                            value={isEnabled}
                                            style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}


                                        />
                                        <Text style={planTimePeriod=="Yearly"?styles.timePeriodButtonBlue:styles.timePeriodButtonGray}>Yearly</Text>

                                    </View>
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
                <TouchableOpacity style={styles.Nextbutton} onPress={() => navigation.navigate('Add-On',{Plan:plan,planTimePeriod:planTimePeriod})}>
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
        flexDirection:'row',
        
        
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
        height: '110%',
        position: 'absolute',
        top: '-20%',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    innerInfoContainer: {
        width: '85%',
        height: '88%',
        
        top: '2%'
    },
    infoContainerHeading: {
        fontSize: 22,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#00008B',


    },
    infoContainerInfo: {
        color: 'grey',
        marginTop: '3%',

    },
    nameInput: {

        color: 'white',
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    infoContainerLabel: {
        fontSize: 11,
        fontFamily: 'sans-serif',
        color: '#00008B',
        marginBottom: '1%',
        fontWeight: '600',



    },
    infoInputContainer: {
        marginTop: '5%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '90%',
        

    },
    Nextbutton: {
        backgroundColor: '#00008B',
        padding: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'48%',
        borderRadius: 5
    },
    NextbuttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    currentPageButton: {
        backgroundColor: '#A7C7E7',
        color: 'black'
    },
    selectPlanButtonContainerBlueBorder: {
        width: '100%',
        height: '24%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00008B',
        display: 'flex',
        flexDirection: 'row'
    },
    selectPlanButtonContainerGrayBorder: {
        width: '100%',
        height: '24%',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#DCDCDC',
        display: 'flex',
        flexDirection: 'row'
    },
    selectPlanButtonOuterContainer: {

        height: '80%',
        display: 'flex',
        flexDirection: 'colum',
        justifyContent: 'space-evenly'
    },
    selectPlanToggleButtonContainer: {
        border: 1,
        borderColor: 'gray',
        width: '100%',
        height: '16%',
        backgroundColor: '#F2F2F2',
        border: 5,
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    selectPlanIconContainer: {
        width: '23%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    selectPlanIconNameContainer: {

        width: '77%',
        display: 'flex',
        justifyContent: 'center',
    },
    selectPlanIconName: {
        color: '#00008B',
        fontWeight: '600',
        lineHeight: 20

    },

    selectPlanIconPrice: {
        color: 'gray'
    },
    timePeriodButtonBlue: {
        color: '#00008B',
        fontWeight: '600',
        fontSize: 12,
    },
    selectPlanToggleButtonInnerContainer:{
        width:'60%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    timePeriodButtonGray: {
        color: 'grey',
        fontWeight: '600',
        fontSize: 12,
    },
    insideBottomContainerBackButton:{
        width:"45%",
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    insideBottomContainerNextButton:{
        width:"45%",
        backgroundColor:'red'
    },
    insideBottomContainerNextButton:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    goBackbutton:{
        padding: 11,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width:'48%',
        borderRadius: 5
    },
    goBackbuttonText:{
        color:'grey',
        fontWeight:'500',
        fontSize:13
        
    }


});

