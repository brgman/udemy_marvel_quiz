import React from 'react';

// class Voiture extends React.Component {

// }

const Voiture = ({ marque, couleur }) => {
    return (
        <div>
            <p>marque: {marque}</p>
            <p>couleur: {couleur}</p>
        </div>
    );
}

export default Voiture;