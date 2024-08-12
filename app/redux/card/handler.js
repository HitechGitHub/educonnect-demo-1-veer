
import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

const initialState = {
  value:null,
}

export const handlerSlice = createSlice({
  name: 'handlerOfCard',

  initialState,

  reducers: {
    updateAction: (state)=>{
        const fetchedStatus = useSelector((data)=> data.card.value.name)
        console.log(fetchedStatus);
        state.value = fetchedStatus
        return state.value
  }, 
  }
})

// Action creators are generated for each case reducer function
export const { updateAction } = handlerSlice.actions

export default handlerSlice.reducer