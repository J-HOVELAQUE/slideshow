import React from 'react';

import './cardLocation.css';

function CardLocation({ data }) {

    return (
        <div className="cardLocation">
            <h3 className="titleLoc">{data.title}</h3>

            <div>
                <div className="tenant">
                    <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                    <div className="avatar-desc">
                        <p>{data.candidate_1.name.toUpperCase()}</p>
                        <p className="badgeJob">{data.candidate_1.status}</p>
                    </div>
                </div>

                <div className="tenant">
                    <img src="/avatar.jpg" alt="avatar pict" className="avatar" />
                    <div className="avatar-desc">
                        <p>{data.candidate_2.name.toUpperCase()}</p>
                        <p className="badgeJob">{data.candidate_2.status}</p>
                    </div>
                </div>
            </div>

            <h6>Revenu mensuel moyen</h6>
            <div className="revenuBox">
                <div className="candidate">
                    <p>Candidats</p>
                    <p className="amount">{data.rev_candidate} €</p>
                </div>
                <div className="candidate">
                    <p>Garants</p>
                    <p className="amount">{data.rev_garant} €</p>
                </div>
            </div>

            <button>Voir plus</button>
            <footer>Visite du {data.visit}</footer>
        </div>
    )
}

function DeckCard() {

    return (
        <div className="deckCard">
            <CardLocation />
            <CardLocation />
            <CardLocation />
        </div>

    )
};

export { CardLocation, DeckCard };