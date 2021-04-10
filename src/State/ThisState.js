import React, { Component } from 'react';

class ThisState extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked:true
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({liked:!this.state.liked});
    }
    render() {
        var text = this.state.liked ? 'Liked' : "Haven't liked"
        return (
            <div>
                <p onClick={this.handleClick}>
                    You {text} this . Click to toggle
                </p>
            </div>
        )
    }
}

export default ThisState;