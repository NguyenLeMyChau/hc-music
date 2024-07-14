import React, { useState } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
// import DarkMode from '../../theme/DarkMode';
import { CiUser, CiHeart, CiSettings } from "react-icons/ci";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { BiAlbum } from "react-icons/bi";
import logo from '../../images/logo.png';

function Menu() {
    const [selectedItem, setSelectedItem] = useState('Dashboard');


    const menuItems = [
        {
            section: "Menu",
            items: [
                { Icon: CiUser, label: "Profile" },
                { Icon: MdDashboard, label: "Dashboard" },
                { Icon: CiHeart, label: "Favorite" },
                { Icon: BiAlbum, label: "Album" }]
        },
        {
            section: "Help",
            items: [
                { Icon: CiSettings, label: "Setting" },
                { Icon: MdOutlineSupportAgent, label: "FAQs" }]
        }
    ];

    const handleItemClick = (label) => {
        setSelectedItem(label);
    };

    return (
        <div className='menu-body'>
            <div className='menu-logo'>
                <img src={logo} alt="logo" />
            </div>

            {menuItems.map((menuSection) => (
                <div className='menu-menu' key={menuSection.section}>
                    <h3>{menuSection.section}</h3>
                    <div className='menu-gradient-line'></div>
                    <div>
                        {menuSection.items.map(({ Icon, label }) => (
                            <MenuItem key={label} Icon={Icon} label={label} onClick={() => handleItemClick(label)} isSelected={selectedItem === label} />
                        ))}
                    </div>
                </div>
            ))}


        </div>
    );
}

export default Menu;
