import React from 'react';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = { msg : "Hello Rahul" }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ msg:event.target.value });
    }

    render() {
        var makenew = this.state.msg;
        return (
            <div>
                <input type="text" value={makenew} onChange={this.handleChange}/>
                <p>{makenew}</p>
            </div>
        )
    }
}

export default Form;