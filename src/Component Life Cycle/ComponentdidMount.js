import React, { Component } from 'react'

class ComponentdidMount extends Component {
    constructor(props) {
        super(props);
        this.state = { opacity : 0}
    }

    componentDidMount() {
        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity-=0.5;
            if(opacity<0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity:opacity
            });
        }.bind(this),100);
    }

    render() {
        return (
            <div style={{opacity:this.state.opacity}}>
                    {this.props.name}
            </div>
        )
    }
}
export default ComponentdidMount;