import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit"; 



const contactSlice = createSlice({
    name: 'contacts',
    initialState:{
         items:[],
    },
    reducers: {
       addContact: (state, action) => {
      const { name, number } = action.payload;
      state.items.push({
        id: nanoid(),
        name,
        number,
      });
    },

        deleteContact: (state, action) => {
            state.items = state.items.filter((contact )=> contact.id !== action.payload)
        }
    }
});

export const { addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer;