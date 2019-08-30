import React from 'react'
import './welcome.css'

class Welcome extends React.Component{

    render= () => {
        return(
            <div className='weldiv'>
                <div className="welcm">
                    Welcome to Shoppy
                </div>
                <div>
                <button className='welbut1' >
                    Assist
                </button>
                </div>
                <div>
                <button className='welbut2' >
                    Shop
                </button>
                </div>
            </div>
        )
        }
}

export default Welcome;