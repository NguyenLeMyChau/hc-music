import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
// import DarkMode from '../../theme/DarkMode';
import { CiUser, CiHeart, CiSettings } from "react-icons/ci";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { BiAlbum } from "react-icons/bi";
import logo from '../../images/logo.png';

function Menu() {
    return (
        <div className='menu-body'>
            <div className='menu-logo'>
                <img src={logo} alt="logo"/>
            </div>

            <div className='menu-menu'>
                <h3>Menu</h3>
                <div className='menu-gradient-line'></div>

                <div>
                    <MenuItem Icon={CiUser} label="Profile" />
                    <MenuItem Icon={MdDashboard} label="Dashboard" />
                    <MenuItem Icon={CiHeart} label="Favorite" />
                    <MenuItem Icon={BiAlbum} label="Album" />
                </div>
            </div>

            <div className='menu-menu'>
                <h3>Help</h3>
                <div className='menu-gradient-line'></div>

                <div>
                    <MenuItem Icon={CiSettings} label="Setting" />
                    <MenuItem Icon={MdOutlineSupportAgent} label="FAQs" />
                </div>
            </div>


        </div>
    );
}

export default Menu;
