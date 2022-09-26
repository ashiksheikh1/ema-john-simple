import React from 'react';
import loga from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={loga} alt="" />
            <div>
                <a href="./home">home</a>
                <a href="./about">about</a>
                <a href="./blog">blog</a>
            </div>
        </nav>
    );
};

export default Header;