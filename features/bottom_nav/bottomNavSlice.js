import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const bottomNavSlice = createSlice({
    name:"bottomNavIndex",
    initialState: {
        bottomNavIndex: 0
    },
    reducers: {
        setIndex: (state, action) => {
            state.value = action.payload            
        }
    }
})

export const {setIndex} = bottomNavSlice.actions
export default bottomNavSlice.reducer