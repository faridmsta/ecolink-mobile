import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const UserInput = ({ errorText, style, ...props }) => {
    return (
        <View>
            <View style={{
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 10,
                backgroundColor: '#000000a0'
            }} >
                <TextInput
                    {...props}
                    style={[{ width: '100%' }, style]}
                />

            </View>
            {errorText && <Text style={{ color: 'tomato', fontFamily: 'poppins' }} >{errorText}</Text>}
        </View>
    )
}

export default UserInput

const styles = StyleSheet.create({})