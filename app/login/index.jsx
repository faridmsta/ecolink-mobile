import { Button, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Style from '../../constants/Style'
import UserInput from '../../components/Inputs/UserInput'

import nameValidator from './../../components/validators/nameValidator'
import emailValidator from './../../components/validators/emailValidator'
import passwordValidator from './../../components/validators/passwordValidator'

import PhoneInput from '../../components/Inputs/PhoneInput'
import { useRouter } from 'expo-router';

const Login = () => {

    const router = useRouter();

    const [userData, setUserData] = useState({
        email: { value: '', error: '' },
        password: { value: '', error: '' },

    })


    const handleSubmit = () => {
        const emailError = emailValidator(userData.email.value);
        const passwordError = passwordValidator(userData.password.value);
    
        setUserData({
            ...userData,
            email: { ...userData.email, error: emailError },
            password: { ...userData.password, error: passwordError  },
        });
    
        // If there are no errors, redirect
        if ( !emailError && !passwordError ) {
            // Instead of returning a Redirect component, you can use navigation if this is part of a navigation stack
            router.push('/(tabs)/home');
        }
    };

    return (
        <ImageBackground source={require('./../../assets/img/regbg.jpg')}
            style={[Style.Screen, { alignItems: 'center', justifyContent: 'center' }]}
        >
            <View style={[Style.container, { width: '100%' }]} >
                <View style={{ width: "100%" }} >
                    <Text style={{
                        position: 'absolute',
                        top: "-40%",
                        fontSize: 40,
                        color: Style.colors.light,
                        fontFamily: 'poppins-bold',
                        paddingBottom: 20
                    }}>Login</Text>
                    <View style={{ gap: 10 }} >

                        <View style={{ flexDirection: 'row', gap: 10 }} >
                            <View style={{ flex: 1 }} >
                                <Text
                                    style={{
                                        color: Style.colors.light,
                                        fontFamily: 'poppins'
                                    }}
                                >Email*</Text>
                                <UserInput
                                    style={{
                                        color: Style.colors.light,

                                    }}
                                    value={userData.email.value}
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            email: { ...userData.email, value: e.nativeEvent.text }
                                        });
                                    }}
                                    errorText={userData.email.error}
                                />
                            </View>

                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }} >
                            <View style={{ flex: 1 }} >
                                <Text
                                    style={{
                                        color: Style.colors.light,
                                        fontFamily: 'poppins'
                                    }}
                                >Password*</Text>
                                <UserInput
                                    style={{
                                        color: Style.colors.light,

                                    }}
                                    value={userData.password.value}
                                    onChange={(e) => {
                                        setUserData({
                                            ...userData,
                                            password: { ...userData.password, value: e.nativeEvent.text }
                                        });
                                    }}
                                    errorText={userData.password.error}
                                    secureTextEntry={true}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }} >
                          <Pressable onPress={()=>{router.push('/register');}} >
                            <Text style={{fontFamily:'poppins',color:Style.colors.greenLight}}  >Don't have an account?</Text>
                          </Pressable>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }} >
                            <View style={{ flex: 3 }} >

                            </View>
                            <View style={{ flex: 5 }} >
                                <Pressable style={{ width: '100%', height: 45, backgroundColor: Style.colors.dark, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
                                    onPress={handleSubmit}
                                >
                                    <Text style={{ fontFamily: 'poppins-bold', color: Style.colors.light, fontSize: 16 }} >Submit</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>
            </View>
        </ImageBackground >
    )
}

export default Login

const styles = StyleSheet.create({})