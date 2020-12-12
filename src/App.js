import React from 'react';
import './App.css';
import Homepage from './components/homepage';
import Productscreen from './components/product.screen';
import '../src/components/cascading/cascading.css';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import CartScreen from './components/cart.screen';
import ButtonAppBar from './components/navbar.component';
import SignInscreen from './components/sign.in.screen';

function App(props) {

 
  return (
            <BrowserRouter>
              <div className="App">
                <ButtonAppBar/>
                    <Route path="/" exact={true} component={Homepage}/>
                    <Route path="/products/:id" component={Productscreen}/>
                    <Route path="/cart/:id?" component={CartScreen}/>
                    <Route path="/signin" component={SignInscreen}/>
              </div> 
           </BrowserRouter>
  );
}

export default App;
