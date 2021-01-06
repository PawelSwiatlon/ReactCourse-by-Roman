import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';
import { twitterAccounts } from '../../data/twitterAccounts';

const ListWraper = () => (
    <ul className="listWrapper__wrapper">
        {twitterAccounts.map(item => (
            <ListItem key={item.name} {...item} />
        ))}
    </ul>
);

export default ListWraper;