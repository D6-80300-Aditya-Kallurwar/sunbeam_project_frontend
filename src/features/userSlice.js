import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: "",
  }
  
  export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      addUser: (state, item) => {
        console.log("first");
        console.log(item.payload);
        state.items=item.payload;
      },


      deleteUser: (state) => {
        state.items = "";
      },


    //   updateQuantity: (state, item) => {
    //     const { itemId, quantity } = item.payload
    //     console.log(item)
    //     console.log(itemId, quantity)
    //     const items = state.items
    //     for (let index = 0; index < items.length; index++) {
    //       const item = items[index]
    //       if (item['id'] == itemId) {
    //         if (quantity == 0) {
    //           // delete the item from items
    //           items.splice(index, 1)
    //         } else {
    //           item['quantity'] = quantity
    //         }
  
    //         break
    //       }
    //     }
    //     state.items = items
    //   },
      removeItem: (state) => {},
    },
  })
  
  export const { addUser, deleteUser } = userSlice.actions
  export default userSlice.reducer
  