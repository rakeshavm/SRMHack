import React from 'react';
import { QRCode } from "react-qr-svg";

class Qrgen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={this.props.phno}
            />
        );
    }
}
export default Qrgen;