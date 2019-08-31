import React from 'react';


class Product extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var p=document.querySelectorAll(".plus");
        var m=document.querySelectorAll(".minus");
        p.forEach((e,i)=>{e.addEventListener("click",()=>{
            var v = this.props.data.qty + 1;
            document.querySelector('#quty').innerHTML = v;
            this.props.data.qty = v;
            // this.props.func({value : v});
        })
            

        })
        m.forEach((e,i)=>{e.addEventListener("click",()=>{
            var v = this.props.data.qty - 1;
            document.querySelector('#quty').innerHTML = v;
            this.props.data.qty = v;

        }) 
    }) 
    }
    
    render=()=>{
        return(
            <div className="ui segment">
                <div className="ui list">
                    <div className="item">
                        <div className="content">
                            <a className="header">{this.props.data.name}</a>
                            <div className="meta">
                                {this.props.data.category}
                            </div>
                            <div className="content">
                                <div className="io icon button">
                                    <button id="minus" className="ui button minus">
                                        <i className="minus icon"></i>
                                    </button>
                                    <button id='quty' className="ui button">
                                        {this.props.data.qty}
                                    </button>
                                    <button id='plus' className="ui button plus">
                                        <i className="plus icon"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="meta">
                                {this.props.data.pos}
                            </div>
                            <div className="content">
                                Price : {this.props.data.price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;