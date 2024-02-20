import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    items: [],
  }
  
  export const seatSlice = createSlice({
    name: 'seat',
    initialState,
    reducers: {
        addSeat: (state, item) => {
        console.log(item.payload);
        state.items.push(item.payload);
        console.log(state.items);
      },


      deleteSeat: (state,item) => {
        var array=[...state.items];
        var ind=array.findIndex((seat)=>seat==item.payload);
        array.splice(ind,1);
        state.items=array;
        // console.log(array);
        // console.log(state.items);
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
      removeItem: (state) => {state=state.items.splice(0,state.items.length)},
    },
  })
  
  export const { addSeat, deleteSeat ,removeItem} = seatSlice.actions
  export default seatSlice.reducer
  