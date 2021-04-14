import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
import Einstein from './common/generic_components/Einstein'
import Elon from './common/generic_components/Elon'
import Tesla from './common/generic_components/Tesla'
import {Button} from 'react-native-paper'
import {useDispatch, useSelector} from 'react-redux'
import BottomNav from './features/bottom_nav/MyBottomNav'

export default function App () {
  const dispatch = useDispatch()

  const quotes = Array(<Einstein />, <Elon />, <Tesla />)
  const [quote, setQuote] = useState(quotes[0])
  const index = useSelector(state => state.bottomNavIndex.value)

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>INDEX = {index}</Text>

        {quotes[index]}
      </View>

      <View style={{flexDirection: 'row'}}>
        <BottomNav />
      </View>
    </SafeAreaView>
  )
}
