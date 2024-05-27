import {  useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';


function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const cartShownHandler = props => {
    setCartIsShown(true)
  }

  const hideCartHandler = props => {
    setCartIsShown(false)
  }


  return (
    <div className="App-header">
      <CartProvider>
        { cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Meals></Meals>
      </main>
      
      </CartProvider>
     
    </div>
  );
}

export default App;







