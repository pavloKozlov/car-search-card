import React from 'react';
import './withLabel.scss';

/**
 * High Order Component for wrapping component inside a label.
 * 
 * @param {React.ReactElement} Component 
 */
const withLabel = (Component) =>
    /**
     * Wrapper for the original component.
     */
    ({ label, ...props }) => (
    <div className="with-label">
        <label className="with-label--label">
            {label}
            <Component {...{ ...props }} />
        </label>
    </div>
);

export default withLabel;
