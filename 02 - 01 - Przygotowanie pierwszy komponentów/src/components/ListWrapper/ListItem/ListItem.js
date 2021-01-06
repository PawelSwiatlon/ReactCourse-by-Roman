import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({
    name, 
    description, 
    image, 
    twitterLink
    }) => (
    <li className="listItem__wrapper">
        <img 
            src={image} 
            className="listItem__image" 
            alt={name}/>
        <div>
            <h2 className="listItem__name">
                {name}
            </h2>
            <p className="listItem__description">
                {description}
            </p>
            <a className="listItem__button" target="_blank" href={twitterLink}>
                visit twitter page
            </a>
        </div>
    </li>
);

ListItem.propTypes = {
    name: PropTypes.string.isRequired, 
    description: PropTypes.string,
    image: PropTypes.string.isRequired,  
    twitterLink: PropTypes.string.isRequired,
}
ListItem.defaultProps = {
    description: 'One of the react crators',
}
export default ListItem;