import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './HeaderNavigation.module.scss';

const HeaderNavigation = () => (
    <ul className={style.wrapper}>
        <li className={style.navItem}>
            <NavLink exact
                activeClassName={style.navItemLinkActive}
                className={style.navItemLink} 
                to="/">
                Twitters
            </NavLink>
        </li>    
        <li className={style.navItem}>
            <NavLink 
                activeClassName={style.navItemLinkActive}
                className={style.navItemLink} 
                to="/articles">
                Articles
            </NavLink>
        </li>    
        <li className={style.navItem}>
            <NavLink 
                activeClassName={style.navItemLinkActive}
                className={style.navItemLink} 
                to="/notes">
            Notes</NavLink>
        </li>    
    </ul>
);

export default HeaderNavigation;