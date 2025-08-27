import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';


const initialState = {
  value: 0,
  pastes: localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  :[]
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes", 
        JSON.stringify(state.pastes))
      toast("Paste created succesfully! ")
      
    },
    updateToPastes: (state, action) => {
      
    },
    resetAllPastes: (state, action) => {
      
    },
    removeFromPastes: (state, action) => {

    },
  },
})


export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = PasteSlice.actions

export default PasteSlice.reducer