import React, { Component } from 'react';

export default class Movie extends Component {

    render () {
        return (
            <p>Ceci est le film : { this.props.id }</p>
        );
    }

}