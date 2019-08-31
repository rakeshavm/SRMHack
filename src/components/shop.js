import React from 'react';
import './shop.css';

class Shop extends React.Component{
    render=()=>{
        return(
            <div className="Main">
                <div className="left">
                    <div className='quediv'>
                    <div className="title">
                        Queries
                    </div>
                    </div>
                </div>
                <div className="right">
                <div className='notdiv'>
                    <div className="title">
                        Notification
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;