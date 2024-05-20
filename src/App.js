import { Fragment, useState } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

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
      <Fragment>
        { cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={cartShownHandler} />
      <main>
        <Meals></Meals>
      </main>
      
      </Fragment>
     
    </div>
  );
}

export default App;





