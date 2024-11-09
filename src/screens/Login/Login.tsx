import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { scale } from '../../utils/scaling'
import fontFamily from '../../constants/fontFamily'

type Props = {}

const Login = (props: Props) => {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
      <Text style={styles.headerStyle} >Login</Text>
      <Text style={styles.descripition} >Get ready to login First</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  headerStyle :{
    // fontSize:scale(30),
    fontFamily:fontFamily.bold
  },
  descripition :{
    // fontSize:scale(20),
    fontFamily:fontFamily.medium
  }
})