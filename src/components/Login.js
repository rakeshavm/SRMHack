import React from 'react';
import firebase from 'firebase/app'
import './login.css'

class Login extends React.Component {
    componentDidMount() {
        document
            .querySelector('#subm')
            .addEventListener("click", () => {
                var name = document
                    .querySelector("#name")
                    .value;
                var phno = document
                    .querySelector("#phn")
                    .value;
                firebase
                    .database()
                    .ref('users/' + phno)
                    .set({name: name});
            })
        document
            .querySelector('#log')
            .addEventListener("click", () => {
                // console.log("hr")
                var name = document
                    .querySelector("#name")
                    .value;
                var phno = document
                    .querySelector("#phn")
                    .value;
                firebase
                    .database()
                    .ref()
                    .on('value', (snapshot) => {
                        try {
                            if (snapshot.val().users[phno]["Product"]) {
                                // console.log("der")
                            }
                        } catch (e) {
                            alert("Wrong phone number.Try again!!")
                        }
                    })

            })
    }
    render = () => {

        return (
            <div className='logdiv'>
                <div>
                    <div className='span'>
                        Name
                    </div>
                    <input id='name' className='formel'></input>
                </div>
                <div>
                    <div className='span'>
                        Phone number
                    </div>
                    <input id='phn' className='formel'></input>
                </div>
                <button id='subm' className='sub'>
                    SignUp
                </button>
                <button id='log' className='sub'>
                    Login
                </button>
            </div>
        )
    }
    render = () => {
        return (
            <div className='image'>
                <div className="ui grid">
                    <div className="row">
                        <div className="eleven wide column">
                            <div></div>
                        </div>
                        <div
                            className="four wide right float center aligned column"
                            style={{
                            backgroundColor: '#202020'
                        }}>
                            <div
                                className="ui segments"
                                style={{
                                height: '100vh',
                                paddingTop: '30vh',
                                fontSize: '2em'
                            }}>
                                <div
                                    className="ui segment"
                                    style={{
                                    fontSize: '1em',
                                    backgroundColor: '#202020'
                                }}>
                                    <div className="ui left icon input">
                                        <input id='name' type="text" placeholder="Enter Name"></input>
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div
                                    className="ui segment"
                                    style={{
                                    fontSize: '1em',
                                    backgroundColor: '#202020'
                                }}>
                                    <div className="ui left icon input">
                                        <input id='phn' type="text" placeholder="Enter Phone Number"></input>
                                        <i className="phone icon"></i>
                                    </div>
                                </div>
                                <div
                                    className="ui segment"
                                    style={{
                                    backgroundColor: '#202020'
                                }}>
                                    <button id='subm' className="ui big button black" style={{boxShadow:'0 4px #999'}}>
                                        Sign Up
                                    </button>

                                </div>
                                <div className="ui segment" style={{backgroundColor: '#202020'}}>
                                    <button id="log" className="ui big button black" style={{boxShadow:'0 4px #999'}}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Login;

{/* <div className='subdiv'>
                    <div className='name'>
                        Name
                    </div>
                    <input id='name' className='formel'></input>
                    <div>
                        <div className='name'>
                            Phone number
                        </div>
                        <input id='phn' className='formel'></input>
                    </div>
                    <div>
                        <div className='icon2'></div>
                        <button id='subm' className="subbtn">
                            Signup
                        </button>
                    </div>
                    <div className='icon1'></div>
                    <button id='log' className="subbtn">
                        Login
                    </button>
                </div> */
}