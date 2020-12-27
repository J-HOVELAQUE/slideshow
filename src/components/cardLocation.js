import React from 'react';

import './cardLocation.css';

function CardLocation() {

    return (
        <div className="cardLocation">
            <h3 className="titleLoc">Colocation 4 pers.</h3>

            <div>
                <div className="tenant">
                    <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                    <div className="avatar-desc">
                        <p>H-C. HOVELAQUE</p>
                        <p className="badgeJob">CDI</p>
                    </div>
                </div>

                <div className="tenant">
                    <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                    <div className="avatar-desc">
                        <p>J. HOVELAQUE</p>
                        <p className="badgeJob">Profession libérale</p>
                    </div>
                </div>
            </div>

            <h6>Revenu mensuel moyen</h6>
            <div className="revenuBox">
                <div className="candidate">
                    <p>Candidat</p>
                    <p className="amount">5206 €</p>
                </div>
                <div className="candidate">
                    <p>Garant</p>
                    <p className="amount">6700 €</p>
                </div>
            </div>

            <button>Voir plus</button>
            <footer>Visite du 13 mars à 10h15</footer>
        </div>
    )
}

export default CardLocation;