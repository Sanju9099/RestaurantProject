import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App-header">
      <Fragment>
        <Cart />
      <Header />
      <main>
        <Meals></Meals>
      </main>
      
      </Fragment>
     
    </div>
  );
}

export default App;



