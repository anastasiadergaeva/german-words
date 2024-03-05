import React from 'react';
import './Header.scss'
import logo from '../../images/german.png'

export default function Header() {
    return (
        <div className="header">
            <div className='header__logo'>
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <div className="header__links">
                <div className='link'>word list</div>
                <div className='link'>my words</div>
                <div className='link'>topics</div>
            </div>
        </div>
    )
}