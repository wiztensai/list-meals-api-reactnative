import {configureStore} from '@reduxjs/toolkit'

import BottomNavSlice from '../features/bottom_nav/bottomNavSlice'
// import MealSlice from '../features/meals/mealSlice'

export const store = configureStore({
    reducer: {
        bottomNavIndex:BottomNavSlice,
        // meals:MealSlice
    }
})