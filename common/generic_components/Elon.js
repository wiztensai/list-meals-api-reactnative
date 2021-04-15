import { SafeAreaView, StyleSheet, View, Text, FlatList } from 'react-native'
import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { BASE_URL_MEAL } from '../../constants'

const ElonMusk = () => {
  const tes1 = "https://reactnative.dev/movies.json"
  const tes2 = `${BASE_URL_MEAL}/categories.php`

  const [categories, setCategories] = useState([])

  useEffect( async () => {
    try {
      let categories = await axios.get(tes1)
      // setCategories(categories.data.categories)
      setCategories(categories.data.movies)
    } catch (error) {
      console.error(error);
    }
  }, [])

  return (
    <View>
      <Text>Elon Musk</Text>
      {/* <FlatList

        data={categories}
        keyExtractor={i => i.item.idCategory}
        renderItem={i => {
          <Text>{i.item.strCategory}</Text>
        }} /> */}

      <FlatList
        data={categories}
        renderItem={({item}) => {
          return <Text> {item.title} </Text>
        }}
        keyExtractor={(item, index) => {
          return item.id
        }}
      />

    </View>

  )
}

export default ElonMusk