import React from 'react';
import './footer.css';

function FooterItem({ Icon, onClick }) {
	return (
		<div className='footer-detail'>
			<Icon size={20} color="white" onClick={onClick}/>
		</div>
	);
}

export default FooterItem;