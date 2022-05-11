import React from "react";


export class Detail extends React.Component {
    render() {
        return <p>I have a laptop with an {this.props.ram} Ram, {this.props.hdd} and a core {this.props.core} Processor </p>
    }
}