import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database'

class Fb extends React.Component{
componentDidMount = () => {
    firebase.initializeApp({
        apiKey: 'AIzaSyBLRGzdwowPzZ807mAztoFX6Fu4Z6RJS4s',
        authDomain: 'support-shops.firebaseapp.com',
        databaseURL: 'https://support-shops.firebaseio.com',
        projectId: 'support-shops',
        storageBucket: '',
        messagingSenderId: '874719887422',
        appId: '1:874719887422:web:e6afb878cffa5d48'
    });
   
}
}

export default Fb;