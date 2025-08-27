import React, { Component } from 'react';
import Voiture from './Voiture';

class Voitures extends Component {
    render() {
        const { title } = this.state;

        return (
            <div className="voitures">

                <h2>{title}</h2>

                <p>marque et couleur</p>
                <Voiture marque="Renoult" />
                <Voiture marque="Ford" couleur="lightblue" />
                <Voiture marque="Mercedess" couleur="pink" />
            </div>
        );
    }
}

export default Voitures;
