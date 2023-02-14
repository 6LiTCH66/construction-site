import React from 'react';
import "./offer.css"
import {Contact} from "../index";

function Offer(props) {
    return (
        <div className="offer-box">

            <div className="offer-header">
                <div className="offer-header_wrapper">
                    <h1 className="offer-title">Предложение</h1>
                </div>

            </div>
            <div className="offer-container">
                <div className="offer-wrapper">
                    <Contact/>
                </div>

            </div>


        </div>
    );
}

export default Offer;