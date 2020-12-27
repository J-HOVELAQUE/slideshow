import React from 'react';
import data from '../data/dataPlaceholder.json';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slideshow.css';

import { CardLocation, DeckCard } from './cardLocation';

// const dataCandidates = JSON.parse(data.applications);

const Slideshow = () => {

    console.log(data.applications[0]);
    return (
        <div className="slide-container slideshow">
            <Slide>
                {data.applications.map(element => {
                    return (
                        < div className="each-slide" >
                            <div className="image-container slide">
                                <div className="deckCard">
                                    <CardLocation data={element} />
                                    <CardLocation data={element} />

                                    <CardLocation data={element} />
                                </div>
                            </div>
                        </ div>)
                })}
            </Slide>
        </div >
    )
}

export default Slideshow;