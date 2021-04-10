import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Prototype extends Component {
    static propTypes = {
        title:PropTypes.string.isRequired,
    }

    static 
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

export default Prototype;