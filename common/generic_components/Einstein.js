import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
import React, {useState} from 'react'
import {useNavigation, NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {Button} from 'react-native-paper'

function Einstein ({navigation}) {
  return (
    <View>
      <Text>Einstein</Text>
      <Button
        onPress={() => navigation.navigate('EinsteinDetail')}
        mode='contained'>
        Detail
      </Button>
    </View>
  )
}

function EinsteinDetail () {
  return (
    <View>
      <Text>Einstein</Text>
    </View>
  )
}

const Stack = createStackNavigator()

function EinsteinContainer () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Einstein'>
        <Stack.Screen name='Einstein' component={Einstein} />
        <Stack.Screen name='EinsteinDetail' component={EinsteinDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default EinsteinContainer