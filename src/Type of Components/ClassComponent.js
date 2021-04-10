import React from 'react';

class ClassComponent extends React.Component{
    constructor(props){
        super(props);
        //here define the stete
        //this.state={}
        // this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default ClassComponent;