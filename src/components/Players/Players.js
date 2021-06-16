import React from 'react';
import './Players.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Players = (props) => {
    const { name, image, age, marketValue, type } = props.playerInfo;
    const handleAddToTeam = props.addToTeam;
    return (
        <div className="cart-area">
            <div className="cart">
                <p className="player-title"></p>
                <div className="player-cart">
                    <img src={image} alt="" />
                    <h3 className="name">{name}</h3>
                    <p className="type"><small>{type}</small></p>
                    <p className="age">Age: <strong>{age}</strong></p>
                    <p className="market-value">Market Value: <strong>${marketValue}m.</strong> </p>
                </div>
                <div onClick={() => handleAddToTeam(props.playerInfo)} className="button">
                    <p><FontAwesomeIcon icon={faPlus} /> Add To Team</p>
                </div>
            </div>
        </div>
    );
};

export default Players;