import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import withValueOnChange from '../../hoc/withValueOnChange';

/**
 * Input component.
 */
const Input = ({ onChange }) => (
    <input className="input" onChange={onChange} />
);

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default withValueOnChange(Input);