import React from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slideshow.css';

import { CardLocation } from './cardLocation';


const Slideshow = ({ data }) => {

    const n = 3;

    //// This function for grouping card in deck of three /////
    const groupedData = data.applications.reduce((r, e, i) =>
        (i % n ? r[r.length - 1].push(e) : r.push([e])) && r
        , []);

    return (
        <div className="slide-container slideshow">
            <Slide>
                {groupedData.map((groupedElement, i) => {
                    return (
                        < div className="each-slide" key={i + "group"} >
                            <div className="image-container slide">
                                <div className="deckCard">
                                    {groupedElement.map((element, j) => {
                                        return (
                                            <CardLocation data={element}
                                                key={j + i + "card"}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </ div>)
                })}
            </Slide>
        </div >
    )
}

export default Slideshow;