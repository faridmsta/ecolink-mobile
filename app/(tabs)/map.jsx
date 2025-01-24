import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Style from '../../constants/Style'

const map = () => {
  return (
    <View 
      style={{
        backgroundColor:Style.colors.primary,flex:1,
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Text style={{color:'white'}} >Coming Soon</Text>
    </View>
  )
}

export default map

const styles = StyleSheet.create({})