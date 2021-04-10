import React, { Component } from 'react'

class FindingDOMNode extends Component {
    constructor(props) {
        super(props);
        this.myTextInput  = React.createRef();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.myTextInput.current.focus();
    }

    render() {
        return (
            <div style={{"border":"1px solid black"}}>
                <p>Here it find the input and focus it on click</p>
                <input type="text" ref={this.myTextInput} />
                <p>Testing  </p>
                <input type="button" value="Focus the text Input" onClick={this.handleClick}/>
            </div>
        )
    }
}

export default FindingDOMNode;
