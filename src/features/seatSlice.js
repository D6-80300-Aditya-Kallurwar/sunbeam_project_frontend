import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
  }
  
  export const seatSlice = createSlice({
    name: 'seat',
    initialState,
    reducers: {
        addSeat: (state, item) => {
        console.log("first");
        console.log(item.payload);
        state.items.push(item.payload.seatNo);
      },


      deleteSeat: (state) => {
        state.items = "";
      },


    //   updateSeat: (state, item) => {
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
  
  export const { addSeat, deleteSeat,updateSeat } = seatSlice.actions
  export default seatSlice.reducer
  