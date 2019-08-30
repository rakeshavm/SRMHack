import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { Router, Link } from "@reach/router"
import Login from './components/Login';
import Welcome from './components/welcome';
import Shop from './components/shop';
import Qr from './components/qr';
import Cart from './components/cart'
firebase.initializeApp({
    apiKey: 'AIzaSyBLRGzdwowPzZ807mAztoFX6Fu4Z6RJS4s',
    authDomain: 'support-shops.firebaseapp.com',
    databaseURL: 'https://support-shops.firebaseio.com',
    projectId: 'support-shops',
    storageBucket: '',
    messagingSenderId: '874719887422',
    appId: '1:874719887422:web:e6afb878cffa5d48'
});

class App extends React.Component {
    
    render = () => {

        return(
            <Router>
                <Login path='/login'/>
                <Welcome path='/'/>
                <Shop path='/shop'/>
                <Qr path='/qr'/>
                <Cart path='/cart'/>
            </Router>
        );
    }
}

export default App;
