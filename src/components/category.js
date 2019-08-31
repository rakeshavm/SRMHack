import React from 'react';
import firebase from 'firebase/app'
import Product from './Product';


class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           pdt : false,
           data : [{category: null,
            name : null,
            price : null,
            expd : null,
            mfgd : null,
            qty : null}]
           
        }
    }
    
//     componentDidMount = () => {
//         document.querySelector(`#${this.props.name}`).addEventListener('click',()=>{
//             firebase.database().ref('shop/').on('value',(snapshot)=>{
//                 snapshot.forEach((e)=>{
//                     if(e.val()["category"] === this.props.name){
//                         this.setState({  category: e.val()["category"],
//                             pdt : true,
//                             name: e.val()['pname'],
//                              price: e.val()['price'],
//                              expd: e.val()['expd'],
//                              mfgd: e.val()['mfgd'] });
//                         // <Product data={{
//                         //     category: e.val()["category"],
//                         //     name: e.val()['pname'],
//                         //     price: e.val()['price'],
//                         //     expd: e.val()['expd'],
//                         //     mfgd: e.val()['mfgd']
//                         //  } }/>
//                     }
//                 })
//         })
//     })
// }
    
    render = () => {
    return (
    
            <div id={this.props.name}
                className="ui segment"
                onClick={() => this.props.render({click: true, name: this.props.name })}>
                <div className="ui card">
                    <div className="image" style={{width: "100%", height: "100%" 
                    }}>
                        <img src={require(`./img/${this.props.name}.svg`)} alt='image'></img>
                    </div>
                    <div className="content">
                        <a  className="header">{this.props.name}</a>
                        <div className="meta">
                            Click to view products!
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;