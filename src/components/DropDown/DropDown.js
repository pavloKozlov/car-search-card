import React from 'react';
import PropTypes from 'prop-types';
import './DropDown.scss';
import withValueOnChange from '../../hoc/withValueOnChange';

/**
 * Dropdown component with options.
 * When no value is selected, the prompt is shown by default or empty space if no prompt is provided to the component.
 */
const DropDown = ({ options, prompt, id, name, onChange }) => (
    <select id={id} name={name} className="drop-down" onChange={onChange}>
        <option className="drop-down__option drop-down__option--prompt" value="">{prompt}</option>
        {
            options.map((option) => (
                <option className="drop-down__option" key={option.id} value={option.id}>{option.name}</option>
            ))
        }
    </select>
);

DropDown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    prompt: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
};

DropDown.defaultProps = {
    options: [],
    prompt: '',
    onChange: () => {},
};

export default withValueOnChange(DropDown);
