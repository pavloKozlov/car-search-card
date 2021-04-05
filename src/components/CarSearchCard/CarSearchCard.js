import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withLabel from '../../hoc/withLabel';
import Card from '../Card';
import DropDown from '../DropDown';
import Input from '../Input';
import Button from '../Button';

const LabeledDropDown = withLabel(DropDown);
const LabeledInput = withLabel(Input);

const options = [{
    id: '1',
    label: 'label 1',
}, {
    id: '2',
    label: 'label 2',
}, {
    id: '3',
    label: 'label 3',
}, {
    id: '4',
    label: 'label 4',
}, {
    id: '5',
    label: 'label 5',
}, {
    id: '6',
    label: 'label 6',
}, {
    id: '7',
    label: 'label 7',
}, {
    id: '8',
    label: 'label 8',
}];

/**
 * Card component to search for cars.
 */
const CarSearchCard = ({ onSubmit }) => {
    const [selectedBrand, setSelectedBrand] = useState();
    const [selectedModel, setSelectedModel] = useState();
    const [keyword, setKeyword] = useState();

    const memoizedOnSubmit = useCallback((event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        onSubmit(formData);
    }, [onSubmit]);

    const isButtonEnabled = selectedBrand || selectedModel || keyword;

    return (
        <Card title="Buy a car">
            <form onSubmit={memoizedOnSubmit}>
                <div className="card--body">
                    <LabeledDropDown id="S1" name="brand" label="Brand:" options={options} onChange={setSelectedBrand} prompt="- All Brands -" />
                    <LabeledDropDown id="S2" name="model" label="Model:" options={options} onChange={setSelectedModel} prompt="- Select a brand first -" />
                    <LabeledInput id="T" name="keyword" label="Keyword:" onChange={setKeyword} />
                </div>
                <hr />
                <div className="card--footer">
                    <Button id="B" type="submit" disabled={!isButtonEnabled}>Search cars</Button>
                </div>
            </form>
        </Card>
    );
}

CarSearchCard.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}

export default CarSearchCard;
