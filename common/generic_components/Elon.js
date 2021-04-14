import {SafeAreaView, StyleSheet, View, Text} from 'react-native'
import React, {Component, useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'


// const ElonMusk = () => {
//   // const data = useSelector(state => state.meals.value)

//   useEffect(() => {
//     axios.get("www.themealdb.com/api/json/v1/1/categories.php")
//     .then(res => {
//       console.log(res)
//     }).catch(
//       error => console.log(error)
//       )
//   })

//   return (

//     <Text>Elon Musk</Text>

//   )
// }

class ElonMusk2 extends Component {
  componentDidMount() {
    axios.get("www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => {
      console.log(res)
    }).catch(
      error => console.log(error)
      )
  }

  render() {
    return (
      <Text>elon musk</Text>
    )
    
  }

}

export default ElonMusk2