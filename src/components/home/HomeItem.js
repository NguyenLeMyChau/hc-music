import React from 'react';
import './Home.css';

function HomeItem({ Icon, label, className }) {
    return (
        <div className='home-detail'>
            <svg width="0" height="0">
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#B5179E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#7209B7', stopOpacity: 1 }} />
                </linearGradient>
            </svg>

            <Icon style={{ fill: 'url(#gradient1)' }} size={23} className={className}/>

            <p>{label}</p>

        </div>
    );
}

export default HomeItem;