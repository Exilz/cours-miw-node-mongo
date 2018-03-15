import React, { Component } from 'react';

export default class Movie extends Component {

    get genres () {
        const items = this.props.genres.map((genre, index) => {
            return (
                <li key={`genre-${index}`}>{genre}</li>
            );
        });
        return (
            <ul>
                { items }
            </ul>
        );
    }

    render () {
        return this.props.title ? (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
                <p>Date de sortie : {this.props.year}</p>
                { this.genres } 
            </div>
        ) :
        (
            <p>Ceci est la page d'accueil des films.</p>
        );
    }
}
