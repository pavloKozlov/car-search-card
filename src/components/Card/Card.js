import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

/**
 * Card component with title, body and footer divided by horizontal lines.
 */
const Card = ({ title, children, footerContent }) => (
    <div className="card">
        <h3 className="card--title">{title}</h3>
        <hr />
        <div className="card--body">
            {children}
        </div>
        <hr />
        <div className="card--footer">
            {footerContent}
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    footerContent: PropTypes.node,
};

export default Card;