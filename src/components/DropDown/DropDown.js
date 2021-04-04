import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './DropDown.scss';
import withValueOnChange from '../../hoc/withValueOnChange';

/**
 * Dropdown component with options.
 * When no value is selected, the prompt is shown by default or empty space if no prompt is provided to the component.
 */
const DropDown = ({ options, prompt, className, onChange }) => (
    <select className={classnames('drop-down', className)} onChange={onChange}>
        <option className="drop-down__option drop-down__option--prompt" value="">{prompt}</option>
        {
            options.map(({ id, label }) => (
                <option className="drop-down__option" key={id} value={id}>{label}</option>
            ))
        }
    </select>
);

DropDown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    })),
    prompt: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
    options: [],
    prompt: '',
};

export default withValueOnChange(DropDown);
