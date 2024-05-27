
import { useContext} from "react";
import CartItems from "./CartItems";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartContext from "../../Store/cart-context";


const Cart = props => {

  const cartCtx = useContext(CartContext);
  
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  }

  const cartItemAddHandler = item => {
    cartCtx.addItem(item)
  }

  const cartItems = <ul className={classes['cart-items']}> 
{cartCtx.items.map((items) => 
<CartItems 
key={items.id} 
name={items.name} 
amount={items.amount} 
price={items.price}
onRemove={cartItemRemoveHandler.bind(null, items.id)}
onAdd={cartItemAddHandler.bind(null, items)}
/>
)}</ul>;

    return <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
      </Modal>
}

export default Cart;

