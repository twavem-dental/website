import React from 'react';
import './IconList.scss';
import ThemeIcon from '../ThemeIcon/ThemeIcon';

const IconList = (props) => {

    const {icon, title, description} = props.singleFeature;

    return (
        <div className="col-lg-6">
            <div className="icon-list">
                <ThemeIcon icon={icon} />
                <div className="icon-list-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default IconList;