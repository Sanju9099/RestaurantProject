import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if(action.type === "ADD"){
       
       const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
       
       const existingCartItems = state.items.findIndex(item => item.id === action.item.id);

       const existingItem = state.items[existingCartItems];
      
       let updatedItems;

       if(existingItem) {
         const updatedItem = {
            ...existingItem,
            amount: existingItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingCartItems] = updatedItem;
       } else {
        updatedItems = state.items.concat(action.item);
       }

    
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => 
            item.id === action.id
        )
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAount = state.totalAmount - existingItem.price;
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAount
        }
    }
    return defaultCartState;
}

const CartProvider = props => {

    const [cartState, disPatchCartState] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        disPatchCartState({type: 'ADD', item: item})
    };

    const removeItemsFromCartHandler = (id) => {
        disPatchCartState({type: 'REMOVE', id: id})
    
    };

    const cartcontext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemsFromCartHandler
    }
    return <CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;