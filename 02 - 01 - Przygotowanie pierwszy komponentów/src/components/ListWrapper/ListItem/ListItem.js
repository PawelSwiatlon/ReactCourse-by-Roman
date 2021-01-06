import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
    <li className="listItem__wrapper">
        <img 
            src={props.image} 
            className="listItem__image" 
            alt={props.name}/>
        <div>
            <h2 className="listItem__name">{props.name}</h2>
            <p className="listItem__description">{props.description}</p>
            <a className="listItem__button" href={props.twitterLink}> visit twitter page</a>
        </div>
    </li>
);

export default ListItem;