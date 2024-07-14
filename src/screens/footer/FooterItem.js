import React from 'react';
import './footer.css';

function FooterItem({ Icon, onClick, className, tooltip }) {
	return (
		<div className='footer-detail'>
			<Icon size={23} color="white" onClick={onClick} className={className} title={tooltip}/>
		</div>
	);
}

export default FooterItem;