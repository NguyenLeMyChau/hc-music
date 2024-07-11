import React from 'react';
import './footer.css';

function FooterItem({ Icon }) {
	return (
		<div className='footer-detail'>
			<Icon size={20} color="white"/>
		</div>
	);
}

export default FooterItem;