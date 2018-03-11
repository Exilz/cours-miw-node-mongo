import React, { Component } from 'react';

export default class Article extends Component {

    render () {
        return (
            <p>Ceci est l'article : { this.props.id }</p>
        );
    }

}