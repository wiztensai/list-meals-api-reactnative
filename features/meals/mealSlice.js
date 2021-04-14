import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GetCategory} from "../../services/meals"

// const mealSlice = createSlice({
//     name:"meals",
//     initialState: {
//         meals: []
//     },    
//     extraReducers: {
//         [GetCategory.fulfilled]:(state, action) => {
//             state.meals = action.payload
//         }
//     }
// })

// // export const {setIndex} = mealSlice.actions
// export default mealSlice.reducer