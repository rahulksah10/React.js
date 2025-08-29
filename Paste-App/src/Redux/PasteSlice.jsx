import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';


const initialState = {
  value: 0,
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;

      // add check to find paste is already existing or not

      state.pastes.push(paste);
      localStorage.setItem("pastes",
        JSON.stringify(state.pastes))
      toast("Paste created succesfully! ")

    },
    updateToPastes: (state, action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) =>
        item._id === paste._id);
      if (index >= 0) {
        state.pastes[index] = paste;

        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("Paste updated");
      }

    },
    resetAllPastes: (state, action) => {

      state.pastes = [];
      localStorage.removeItem("Pastes");

    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;

      console.log(pasteId);
      
      const index = state.pastes.findIndex((item) =>
        item._id === pasteId);

      if (index >= 0) {
        state.pastes.splice(index, 1);

        localStorage.setItem("pastes", JSON.stringify(state.pastes))
         
        toast.success("Paste deleted")
      }

    },
  },
})


export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = PasteSlice.actions

export default PasteSlice.reducer