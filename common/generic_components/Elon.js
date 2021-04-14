import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'


const ElonMusk = () => {
  // const data = useSelector(state => state.meals.value)

  const [data, setData] = useState("tes")

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(String(json.movies))
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  })

  return (
    <SafeAreaView>
      <Text>Elon Musk</Text>
      <Text>{data}</Text>
    </SafeAreaView>

  )
}

// class ElonMusk2 extends Component {
//   const [tes, setTes] 

//   componentDidMount() {

//     fetch('https://reactnative.dev/movies.json')
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json)
//         return json.movies;
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }

//   render() {
//     return (
//       <Text>elon musk</Text>
//     )

//   }

// }

export default ElonMusk