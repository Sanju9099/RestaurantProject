import { useReducer } from "react";
import CartContext from "./cart-context";


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
       const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
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