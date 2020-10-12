import React from 'react';
import '../styles/css/TreatCard.css';
import Favorite from './Favorite';
import Popularity from './Popularity';


function TreatCard(props) {
    return (
            <div className="kinder-card">
                <div className="kinder-pic">
                    <img src={props.picture} alt={props.name} />
                </div>
                <div className="kinder-content">
                    <div>
                        <h2> {props.name}</h2>
                    </div>
                    <div>
                        <cite>"{props.quote}"</cite>
                    </div>
                    <Favorite />
                    <Popularity/>
                </div>
            </div>
    )
}

export default TreatCard;