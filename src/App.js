import React from 'react';
import firebase from 'firebase/app';
import 'firebase/database'
// import Welcome from './welcome'
import Login from './Login'
// import Fb from './Fb'

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
          firebase.database().ref('users/' + userId).set({
          username: name,
          email: email
        });
        console.log(userId, name, email);
      }
        return (
            <div>
                {/* <button onClick={writeUserData('kanishq','kanu','sunilkanishq@gmail.com')}>
                  Click
                </button> */}
                {/* <Welcome/> */}
                <Login/>
            </div>
        );
    }
}

export default App;
