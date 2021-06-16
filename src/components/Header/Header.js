import React from 'react';
import headerImg from '../../img/undraw_junior_soccer_6sop.svg';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers} from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const team = props.count;
    const amount = team.reduce((sum, player) => sum + player.marketValue, 0)
    const name = team.reduce((name, player) => name + player.name ,[])
    return (
        <div className="header-area">
            <div className="header-image">
                <nav className="nav-logo">
                    <p><span>-TEAM </span><FontAwesomeIcon icon={faUsers}> </FontAwesomeIcon><sup className="player-count">{team.length}</sup> </p>
                    <p className="player-cost" >Total Cost: <span>${amount}m.</span> </p>
                </nav>
                <img src={headerImg} alt="" />
            </div>
            <div className="header-title">
                <h1>FOOTBALL TEAM</h1>
            </div>
            <div className="player-name container">
                {
                    team.map(n => <div> 
                            <p className="name">{n.name}</p>  
                        <p className="player-cost">Market Value: <span>${n.marketValue}m.</span></p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Header;