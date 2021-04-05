import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

/**
 * Card component with title, body and footer divided by horizontal lines.
 */
const Card = ({ title, children }) => {
    return (
        <div className="card">
            <h3 className="card--title">{title}</h3>
            <hr />
            {children}
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default Card;