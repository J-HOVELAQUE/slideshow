import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slideshow.css';

import CardLocation from './cardLocation';

const Slideshow = () => {
    return (
        <div className="slide-container slideshow">
            <Slide>
                <div className="each-slide">
                    <div className="image-container slide">
                        <div className="deck">


                            <CardLocation />
                        </div>
                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container slide">


                        <CardLocation />

                    </div>
                </div>
                <div className="each-slide">
                    <div className="image-container slide">


                        <CardLocation />

                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;