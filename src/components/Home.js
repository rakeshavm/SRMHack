import React from 'react';
import firebase from 'firebase/app'
import Category from './category';
import Product from './Product';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            name: null,
            data: [{
                category: null,
                name: null,
                price: null,
                expd: null,
                mfgd: null,
                qty : null
            }]
        }
    }

    onHandleRender = (obj) => {
        if (obj.click) {
            var fbdata = [];
            firebase.database().ref('shop/').on('value',(snapshot)=>{
                    snapshot.forEach((e)=>{
                        if(e.val()["category"] === obj.name){
                            fbdata.push({
                            category : obj.name,
                            name: e.val()['pname'],
                             price: e.val()['price'],
                             expd: e.val()['expd'],
                             mfgd: e.val()['mfgd'],
                             qty : 0
                            })}});
                            console.log(fbdata);
            this.setState({
                flag: obj.click,
                name: obj.category,
                data: fbdata
            });
        })

    }
}

getproduct = (obj)=>{
    return <Product data={obj}/>
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
                                <Category name={'FruitsVegetables'} render={this.onHandleRender}/>
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
                                <Category name={'EggsMeat'} render={this.onHandleRender}/>
                                <Category name={'BabyCare'} render={this.onHandleRender}/>
                                <Category name={'FoodGrains'} render={this.onHandleRender}/>
                            </div>
                        </div>
                        <div className="center aligned four wide column">
                            <div
                                className="header"
                                style={{
                                padding: "1vw"
                            }}>
                                <img
                                    src={require("./img/query.svg")}
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
                            <div className="ui segments">
                                {this.state.data.map(obj=>this.getproduct(obj))}
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
                    
                </div>
            );
        }
    }
}

export default Home;