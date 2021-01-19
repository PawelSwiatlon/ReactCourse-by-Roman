import React from 'react';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import logoImage from '../../assets/images/logo.svg';
import style from './Header.module.scss';

const Header = () => (
    <header className={style.wrapper} >
        <img src={logoImage} alt="logo Img error" />
        <HeaderNavigation/> 
        <Button secondary>New Item</Button>
    </header>
);

export default Header;