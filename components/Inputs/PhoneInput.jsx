import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Style from '../../constants/Style'

const PhoneInput = ({ errorText, style, ...props }) => {
    return (
        <View>
            <View style={{
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#000000a0',
                flexDirection:'row',
                alignItems:'center'
            }} >
                <Text style={{ color: Style.colors.light, fontFamily: 'poppins' }} >+</Text>
                <TextInput
                    {...props}
                    style={[{ width: '100%' }, style]}
                    keyboardType="numeric"
                />

            </View>
            {errorText && <Text style={{ color: 'tomato', fontFamily: 'poppins' }} >{errorText}</Text>}
        </View>
    )
}

export default PhoneInput

const styles = StyleSheet.create({})