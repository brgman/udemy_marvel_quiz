import React from 'react';

// class Voiture extends React.Component {

// }

const Voiture = ({ marque, couleur }) => {

    const colorInfo = couleur ? couleur : '#111';

    if (!marque)
        return (<p>Pad de data</p>);

    return (
        <div style={{ backgroundColor: couleur, padding: '10px 100px' }}>
            <p>marque: {marque}</p>
            <p>couleur: {colorInfo}</p>
        </div>
    );
}

export default Voiture;