import { Fragment } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';


function App() {
  return (
    <div className="App-header">
      <Fragment>
      <Header />
      <main>
        <Meals></Meals>
      </main>

      </Fragment>
     
    </div>
  );
}

export default App;


