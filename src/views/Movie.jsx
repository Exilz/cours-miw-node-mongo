import React, { Component } from 'react';

export default class Movie extends Component {

    constructor (props) {
        super(props);
        this.state = {
            loading: 0
        }
    }

    render () {
        return (
            <p>Ceci est le film : { this.props.title }</p>
        );
    }

}