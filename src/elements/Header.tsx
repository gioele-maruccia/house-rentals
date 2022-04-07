import React from 'react';
import '../assets/scss/Header.scss';
import { Hamburger } from './Hamburger';
import { Logo } from './Logo';

function Header(){


    return (
        <div className='header'>
            
            <div className="left">
                <Logo />
            </div>

            <div className="center">
                <span className="bold">Home</span>
                <div>
                    <i className="fa-solid fa-magnifying-glass mr-5"></i>
                    <span className="bold">Search</span>
                </div>
                <span className="bold">About us</span>
                <span className="bold">Contact us</span>
            </div>
            
            <div className="right">
                <div className="wrapper">
                    <Hamburger onPress={() => {}}/>
                    <i className="fa-solid fa-circle-user"></i>
                </div>

            </div>

        </div>
    )
}

export default Header