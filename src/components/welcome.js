import React from 'react'
import './welcome.css'
import { Link } from '@reach/router';

class Welcome extends React.Component{

    render= () => {
        return(
            <div className='weldiv'>
                <div className='cont'>
                <div className="welcm">
                    Welcome to Shopsmart
                </div>
                <div>
                <Link to='/shop'>  
                <button className='welbut1' >
                    Assist
                </button>
                </Link>
                </div>
                <div>
                    <Link to='/login'>
                <button className='welbut2' >
                    Shop
                </button>
                </Link>
                </div>
                </div>
            </div>
        )
        }
}

export default Welcome;