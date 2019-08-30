import React from 'react'
import './welcome.css'

class Welcome extends React.Component{

    render= () => {
        return(
            <div className='weldiv'>
                <h4>
                    Welcome to ...
                </h4>
                <button className='welbut1'>
                    Assist
                </button>
                <button className='welbut2'>
                    Shop
                </button>
            </div>
        )
        }
}

export default Welcome;