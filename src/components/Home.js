import React from 'react';
import Category from './category';
import Product from './Product';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            name: null,
            data: {
                category: null,
                name: null,
                qty: null,
                price: Number
            }
        }
    }

    onHandleRender = (obj) => {
        if (obj.click) {
            this.setState({
                flag: obj.click,
                name: obj.name,
                data: {
                    category: obj.name,
                    name: "Shampoo",
                    qty: 20,
                    price: 50
                }
            })
        }

    }

    render = () => {
        if (!this.state.flag) {
            return (
                <div
                    className="ui grid"
                    style={{
                    width: '100vw',
                    height: '100vh',
                    padding: '2vh'
                }}>
                    <div className="row">
                        <div className="center aligned twelve wide column">
                            <div className="ui category search">
                                <div className="ui icon fluid input">
                                    <input className="prompt" type="text"></input>
                                    <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                        </div>
                        <div className="center aligned four wide column">
                            <div>
                                Hi there!
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned twelve wide column">
                            <div className="ui horizontal segments">
                                <Category name={'Beauty'} render={this.onHandleRender}/>
                                <Category name={'Dairy'} render={this.onHandleRender}/>
                                <Category name={'Fruits & Vegetables'} render={this.onHandleRender}/>
                                <Category name={'Kitchen'} render={this.onHandleRender}/>
                            </div>

                        </div>
                        <div className="center aligned four wide column">
                            <div>
                                <div
                                    className="ui vertical animated blue button"
                                    tabIndex="0"
                                    style={{
                                    width: '7vw'
                                }}>
                                    <div className="hidden content">
                                        <strong>View Cart</strong>
                                    </div>
                                    <div className="visible content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="center aligned twelve wide column">
                            <div className="ui horizontal segments">
                                <Category name={'Pets'} render={this.onHandleRender}/>
                                <Category name={'Eggs & Meat'} render={this.onHandleRender}/>
                                <Category name={'Baby Care'} render={this.onHandleRender}/>
                                <Category name={'Food Grains'} render={this.onHandleRender}/>
                            </div>
                        </div>
                        <div className="center aligned four wide column">
                            <div
                                className="header"
                                style={{
                                padding: "1vw"
                            }}>
                                <img
                                    src={require("../img/query.svg")}
                                    alt="dairy"
                                    style={{
                                    width: "2vw"
                                }}></img>
                                <p>
                                    <strong>Do you have any queries?</strong>
                                </p>
                            </div>
                            <div
                                className="ui fluid icon input"
                                style={{
                                padding: "1vw"
                            }}>
                                <input type="text"></input>
                                <i
                                    className="question circle outline icon"
                                    style={{
                                    marginRight: "0.5vw"
                                }}></i>
                            </div>
                            <div
                                className="ui animated button blue"
                                tabIndex="0"
                                style={{
                                padding: "1vw"
                            }}>
                                <div className="visible content">Submit</div>
                                <div className="hidden content">
                                    <i className="right arrow icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.flag) {
            return (
                <div
                    className="ui grid"
                    style={{
                    width: '100vw',
                    height: '100vh',
                    padding: '3vh'
                }}>
                    <div className="row">
                        <div className="center aligned twelve wide column">
                            <div className="ui category search">
                                <div className="ui icon fluid input">
                                    <input className="prompt" type="text"></input>
                                    <i className="search icon"></i>
                                </div>
                                <div className="results"></div>
                            </div>
                        </div>
                        <div className="center aligned four wide column">
                            <div>
                                Hi there!
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="center aligned twelve wide column">
                            <Product data={this.state.data}/>
                        </div>
                    </div>
                    <div className="center aligned four wide column">
                        <div>
                            <div
                                className="ui vertical animated blue button"
                                tabIndex="0"
                                style={{
                                width: '7vw'
                            }}>
                                <div className="hidden content">
                                    <strong>View Cart</strong>
                                </div>
                                <div className="visible content">
                                    <i className="shop icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;