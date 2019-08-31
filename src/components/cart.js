import React from 'react';
import Product from './Product';

class Cart extends React.Component {
    render = () => {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{width:'100vw',height:'100vh'}}>
                    <h2 className="header">CART</h2>
                    <div className="ui segments">
                        <h3 className="header">Your Order</h3>
                        <div className="ui segment">
                            <Product data={{category:'Kitchen',name:'Vanish',price:'420',qty:'3',pos:'H'}}/>
                        </div>
                        <div className="ui segment">
                            <button className="ui button">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
