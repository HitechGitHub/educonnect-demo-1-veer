import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardReducer from './card/cardSlice'


const rootReducer = combineReducers({
  
    card: cardReducer,
    // handler: handlerSlice,

})
export const store = configureStore({
  reducer: rootReducer
})