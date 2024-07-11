import React from 'react';
import './DarkMode.css';

function DarkMode() {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
    }

    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
    }

    const toggleTheme = (e) => {
        if (e.target.checked)
            setLightMode();
        else
            setDarkMode();

    }

    return (
        <div className="dark-mode">
            <input type="checkbox" id="dark-mode" onChange={toggleTheme} />
            <label htmlFor="dark-mode"></label>
        </div>
    )
}

export default DarkMode;

