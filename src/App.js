
import './App.css';
import React, { Fragment, useEffect } from "react";
import Checkout from './component/checkout/Checkout.js';
import Header from './component/header/Header.js';
import Home from './component/home/Home.js';
import Login from './component/login/Login.js';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './context/ShoppingCart'

import {
  BrowserRouter as Router, Routes, Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function App() {

  const [{ basket, user }, dispacth] = useStateValue();
  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispacth(
          {
            type: 'SET_USER',
            user: {
              email: authUser.email,
              islogged: true
            }
          }
        )
      }

    });
  }, []);


  return (

    <Router>
      <div className="App">



        <Routes>
          <Route exact path='/login' element={<Fragment><Login /></Fragment>}></Route>
          <Route exact path='/' element={<Fragment><Header /> <Home /></Fragment>}> </Route>
          <Route exact path='/checkout' element={<Fragment><Header /> <Checkout /></Fragment>} ></Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
