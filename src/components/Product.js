import React from 'react';

class Product extends React.Component{
    constructor(props){
        super(props);
    }
    render=()=>{
        return(
        <div className="ui segment">
            <div className="ui segment">
                <div className="ui list">
                    <div className="item">
                        <div className="content">
                            <a className="header">{this.props.data.name}</a>
                            <div className="meta">
                                {this.props.data.category}
                            </div>
                            <div className="content">
                                Quantity : {this.props.data.qty}
                            </div>
                            <div className="content">
                                Price : {this.props.data.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Product;