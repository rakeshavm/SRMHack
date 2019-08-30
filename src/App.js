import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import Login from './components/Login';
import Welcome from './components/welcome';
import Shop from './components/shop';

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

        function writeUserData(userId, name, email) {
            firebase
                .database()
                .ref('users/' + userId)
                .set({username: name, email: email});
            console.log(userId, name, email);
        }
        return(
          <div>
            <Login/>
          </div>
        );
    }
}

export default App;
