import React, { Component } from 'react';

class DefaultProps extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        title: 'Default ProtoType',
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default DefaultProps;