import React from 'react';
import './Menu.css';

function MenuItem({ Icon, label }) {
	return (
		<div className='menu-detail'>
			<Icon size={23} color="white" />
			<p>{label}</p>
		</div>
	);
}

export default MenuItem;