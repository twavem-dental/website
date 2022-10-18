import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({subTitle, title}) => {
    return (
        <div className='section-title'>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    );
};

export default SectionTitle;