import React, { Component } from 'react';
import Voiture from './Voiture';

class Voitures extends Component {
    render() {
        return (
            <div className="voitures">
                <h2>Voitures: </h2>
                <p>marque et couleur</p>
                <Voiture marque="Renoult" couleur="rouge" />
            </div>
        );
    }
}

export default Voitures;
