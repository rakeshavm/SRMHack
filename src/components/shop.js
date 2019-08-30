import React from 'react';
import './shop.css';

class Shop extends React.Component{
    render=()=>{
        return(
            <div className="Main">
                <div className="left">
                    <h2 className="title">
                        Queries
                    </h2>
                </div>
                <div className="right">
                    <h2 className="title">
                        Notification
                    </h2>
                </div>
            </div>
        );
    }
}

export default Shop;