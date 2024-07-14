import React from 'react';
import './Menu.css';

function MenuItem({ Icon, label, onClick, isSelected }) {
	return (
        <div className={`menu-detail ${isSelected ? 'selected' : ''}`} onClick={onClick}>

			<Icon size={23} color="white" />
			<p>{label}</p>
		</div>
	);
}

export default MenuItem;