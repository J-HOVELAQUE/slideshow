import React from 'react';

import './cardLocation.css';

function CardLocation() {

    return (
        <div className="cardLocation">
            <h2>Colocation 4 pers.</h2>

            <div className="tenant">
                <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                <div className="avatar-desc">
                    <h4>Julien HOVELAQUE</h4>
                    <p>CDI</p>
                </div>
            </div>

            <div className="tenant">
                <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                <div className="avatar-desc">
                    <h4>Julien HOVELAQUE</h4>
                    <p>CDI</p>
                </div>
            </div>

            <h3>Revenu mensuel moyen</h3>
            <div className="revenuBox">
                <div className="candidate">
                    <p>Candidat</p>
                    <p>5200 €</p>
                </div>
                <div className="candidate">
                    <p>Garant</p>
                    <p>7000 €</p>
                </div>
            </div>

            <button>Voir plus</button>
            <footer>Visite du 13 mars à 10h15</footer>
        </div>
    )
}

export default CardLocation;