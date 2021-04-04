import React from 'react';
import './Card.scss';

const Card = ({title, children}) => (
    <div className="card">
        <h3 className="card--title">{title}</h3>
        <hr/>
        <div className="card--body">
            {children}
        </div>
    </div>
);

export default Card;