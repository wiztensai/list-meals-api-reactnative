import React from 'react'
import {View} from 'react-native'
import {Button} from 'react-native-paper'
import {setIndex} from '../bottom_nav/bottomNavSlice'
import {useDispatch, useSelector} from 'react-redux'

export default function MyBottomNav () {
  const dispatch = useDispatch()

  return (
    <View style={{flexDirection: 'row'}}>
      <Button
        onPress={() => {
          dispatch(setIndex(0))
        }}
        mode='contained'
        style={{flex: 1}}>
        Elon
      </Button>

      <Button
        onPress={() => {
          dispatch(setIndex(1))
        }}
        mode='contained'
        style={{flex: 1}}>
        Einstein
      </Button>

      <Button
        onPress={() => {
          dispatch(setIndex(2))
        }}
        mode='contained'
        style={{flex: 1}}>
        Tesla
      </Button>
    </View>
  )
}

// class MyBottomNav extends React.Component {
//   render () {
//     return (
//       <View style={{flexDirection: 'row'}}>
//         <Button mode='contained' style={{flex: 1}}>
//           Elon
//         </Button>

//         <Button mode='contained' style={{flex: 1}}>
//           Einstein
//         </Button>

//         <Button mode='contained' style={{flex: 1}}>
//           Tesla
//         </Button>
//       </View>
//     )
//   }
// }

// export default MyBottomNav
