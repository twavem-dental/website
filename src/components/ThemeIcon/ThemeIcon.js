import React from 'react';
import './ThemeIcon.scss';

const ThemeIcon = (icon) => {
    return (
        <div className='icon-area'>
            <div className='icon-box'>
                <img src={icon.icon} alt="icon" />
            </div>
        </div>
    );
};

export default ThemeIcon;