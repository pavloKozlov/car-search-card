import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

/**
 * Input component.
 */
const Input = ({ onChange }) => {
    const memoizedOnChange = useCallback((event) => {
        onChange(event.target.value);
    }, [onChange]);

    return (
        <input className="input" onChange={memoizedOnChange} />
    );
}

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default Input;