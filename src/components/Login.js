import React from 'react';
import './login.css'

class Login extends React.Component {
    render = () => {
        return (
            <div className='maindiv'>
                <div className='name'>
                    Name
                </div>
                <input className='formel'></input>
                <div>
                    <div className='name'>
                        Phone number
                    </div>
                    <input className='formel'></input>
                </div>
                <button className="subbtn">
                    Submit
                </button>
            </div>
        );
    }
}

export default Login;