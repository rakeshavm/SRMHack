import React from 'react';

class Category extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {

    }
    render = () => {
        return (
            <div
                className="ui segment"
                onClick={() => this.props.render({click: true, name: this.props.name})}>
                <div className="ui card">
                    <div className="image">
                        <img src={require(`./img/${this.props.name}.svg`)} alt='image'></img>
                    </div>
                    <div className="content">
                        <a className="header">{this.props.name}</a>
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