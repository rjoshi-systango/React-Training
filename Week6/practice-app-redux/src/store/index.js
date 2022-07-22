import { configureStore, createSlice } from '@reduxjs/toolkit';

const inititalCartItemState = {item: [], totalQuantity: 0, isCartClicked: false};

const itemSlice = createSlice({
    name: 'item',
    initialState: inititalCartItemState,
    reducers: {
        
        addItemToCart(state, action) {
            // console.log(action.payload.id );
            
            const newData = action.payload;

            const existingData = state.item.find((element) => element.id === newData.id);

            state.totalQuantity++;

            if(!existingData) {
                state.item.push({
                    id: newData.id,
                    title: newData.title,
                    price: newData.price,
                    quantity: 1,
                    total: newData.price
                });
            }
            else {
                existingData.quantity++;
                existingData.total = existingData.quantity * existingData.price;
            }
        },

        removeItemFromCart(state, action) {
            // console.log(action.payload);            
            const removeData = action.payload;
            state.totalQuantity--;

            state.item.find((element) => {
                // console.log(element);
                if(element.id === removeData.id) {
                    element.quantity--;
                    element.total = element.quantity * element.price;
                }
                return null;
            })
        },

        onClickCartButton(state) {
            state.isCartClicked = !state.isCartClicked;
        }

    }

})

const store = configureStore({
    reducer: {
        cart: itemSlice.reducer
    }
})

export const cartActions = itemSlice.actions;

export default store;