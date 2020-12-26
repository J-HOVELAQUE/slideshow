import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './slideshow.css';

const Slideshow = () => {
    return (
        <div className="slide-container slideshow">
            <Slide>
                <div className="each-slide">
                    <div className="image-container slide">
                        <p>Slide1</p>
                    </div>
                    <h2>First Slide</h2>
                </div>
                <div className="each-slide">
                    <div className="image-container slide">
                        <p>Slide2</p>
                    </div>
                    <h2>Second Slide</h2>
                </div>
                <div className="each-slide">
                    <div className="image-container slide">
                        <p>Slide3</p>
                    </div>
                    <h2>Third Slide</h2>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;