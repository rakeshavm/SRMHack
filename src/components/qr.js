import React from 'react';
import Qrgen from './qrgen';
import './qr.css';

class qr extends React.Component {
    render = () => {
        return(
            <div className='qrdiv'>
                <div className='qrcode'>
                <Qrgen phno='8072696493'/>
                </div>
                <div className='outmess'>
                    <div className='mess'> 
                    <p>Your order has been placed and assistance is being made!</p>
                    <p>Please scan the qr code to receive your products!</p>                    
                     </div>

                </div>
            </div>
        )
    }
}

export default qr;