import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { useState } from "react";

export default function Screen4(props) {

    const [plan, setplan] = useState(props.route.params.plan)
    const [timeperiod, settimeperiod] = useState(props.route.params.timeperiod)
    const [onlineService, setonlineService] = useState(props.route.params.onlineChecked)
    const [largeService, setlargeService] = useState(props.route.params.largeChecked)
    const [customService, setcustomService] = useState(props.route.params.customChecked)

    function checkPlan() {
        if (plan == "Arcade")
            return "$9/mo"
        else if (plan == "Advanced")
            return "$12/mo"
        else
            return "$15/mo"
    }

    function calcTotal() {
        let ans = 0;

        if (plan == "Arcade")
            ans += 9;
        else if (plan == "Advanced")
            ans += 12;
        else
            ans += 15;

        if (onlineService == true)
            ans += 1;

        if (largeService == true)
            ans += 2;

        if (customService == true)
            ans += 2;

        return ans;

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

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>2</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>3</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.currentPageButton]}>
                                <Text style={[styles.buttonText, styles.currentButtonText]}>4</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </View>




            <View style={styles.middle}>
                <View style={styles.infoContainer}>
                    <View style={styles.innerInfoContainer}>
                        <Text style={styles.infoContainerHeading}>Finishing up</Text>
                        <Text style={styles.infoContainerInfo}>Double-check everything looks OK{'\n'}before confirming.</Text>

                        <View style={styles.infoInputContainer}>

                            <View style={styles.chossenPlanContainer}>
                                <View style={styles.innerPlanContainer}>
                                    <View style={styles.planInfoContainer}>
                                        <Text style={styles.planTypeText}>{plan}({timeperiod})</Text>
                                        <Text style={styles.changePlanText}>change</Text>
                                    </View>
                                    <View style={styles.planChargesContainer}>
                                        <Text style={styles.planCharges}>{checkPlan()}</Text>
                                    </View>
                                </View>


                            </View>
                            {
                                onlineService == true ?

                                    <View style={styles.onlineServiceChargeContainer}>
                                        <View style={styles.innerPlanContainer}>
                                            <View style={styles.planInfoContainer}>
                                                <Text style={styles.onlineServiceText}>online service</Text>
                                            </View>
                                            <View style={styles.planChargesContainer}>
                                                <Text style={styles.onlineServiceCharges}>+$1/mo</Text>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    ""
                            }

                            {
                                largeService == true ?
                                    <View style={styles.largerStorageContainer}>
                                        <View style={styles.innerPlanContainer}>
                                            <View style={styles.planInfoContainer}>
                                                <Text style={styles.onlineServiceText}>Larger storage</Text>
                                            </View>
                                            <View style={styles.planChargesContainer}>
                                                <Text style={styles.onlineServiceCharges}>+$2/mo</Text>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    ""
                            }

                            {

                                customService == true ?
                                    <View style={styles.largerStorageContainer}>
                                        <View style={styles.innerPlanContainer}>
                                            <View style={styles.planInfoContainer}>
                                                <Text style={styles.onlineServiceText}>Custom storage</Text>
                                            </View>
                                            <View style={styles.planChargesContainer}>
                                                <Text style={styles.onlineServiceCharges}>+$2/mo</Text>
                                            </View>
                                        </View>
                                    </View>
                                    :
                                    ""

                            }
                            <View style={styles.totalChargesContainer}>
                                <View style={styles.innerPlanContainer}>
                                    <View style={styles.planInfoContainer}>
                                        <Text style={styles.onlineServiceText}>Total(per month)</Text>
                                    </View>
                                    <View style={styles.planChargesContainer}>
                                        <Text style={styles.totalChargesText}>{calcTotal()}</Text>
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
                    <TouchableOpacity style={styles.Nextbutton}>
                        <Text style={styles.NextbuttonText}>Confirm</Text>
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
        borderWidth: 1
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
        // backgroundColor: 'green'

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
    chossenPlanContainer: {
        backgroundColor: '#F2F2F2',
        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    onlineServiceChargeContainer: {
        backgroundColor: '#F2F2F2',
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    largerStorageContainer: {
        backgroundColor: '#F2F2F2',
        width: '100%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    totalChargesContainer: {

        width: '100%',
        height: '30%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerPlanContainer: {
        width: '90%',

        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    planInfoContainer: {
        width: '50%',
        height: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    planChargesContainer: {
        width: '50%',
        height: '100%',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'

    },
    planTypeText: {
        color: '#00008B',
        fontWeight: '500',
        fontWeight: '700',
        fontSize: 12
    },
    planCharges: {
        color: '#00008B',
        fontWeight: '700',
        fontSize: 13
    },
    onlineServiceText: {
        color: 'grey',
        fontSize: 13
    },
    onlineServiceCharges: {
        color: '#00008B',
        fontSize: 13
    },
    totalChargesText: {
        color: 'blue',
        fontSize: 13,
        fontWeight: '700'
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
        backgroundColor: 'blue',
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
    currentButtonText: {
        color: 'black'
    }

});

