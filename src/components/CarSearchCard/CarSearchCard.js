import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withLabel from '../../hoc/withLabel';
import Card from '../Card';
import DropDown from '../DropDown';
import Input from '../Input';
import Button from '../Button';
import LoadingOverflow from '../LoadingOverflow';

const LabeledDropDown = withLabel(DropDown);
const LabeledInput = withLabel(Input);

/**
 * Card component to search for cars.
 */
const CarSearchCard = ({ isLoading, carBrands, carModels, onBrandSelect, onSubmit }) => {
    const [isBrandSelected, setIsBrandSelected] = useState();
    const [keyword, setKeyword] = useState();

    const memoizedOnSubmit = useCallback((event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        onSubmit(formData);
    }, [onSubmit]);

    const memoizedOnBrandSelect = useCallback((value) => {
        setIsBrandSelected(true);
        onBrandSelect(value);
    }, [onBrandSelect]);

    const isButtonEnabled = isBrandSelected || keyword;

    return (
        <Card title="Buy a car">
            <form onSubmit={memoizedOnSubmit}>
                <div className="card--body">
                    <LabeledDropDown id="S1" name="brand" label="Brand:" options={carBrands} onChange={memoizedOnBrandSelect} prompt="- All Brands -" />
                    <LabeledDropDown id="S2" name="model" label="Model:" options={carModels} prompt="- Select a brand first -" />
                    <LabeledInput id="T" name="keyword" label="Keyword:" onChange={setKeyword} />
                </div>
                <hr />
                <div className="card--footer">
                    <Button id="B" type="submit" disabled={!isButtonEnabled}>Search cars</Button>
                </div>
            </form>
            {
                isLoading && <LoadingOverflow />
            }
        </Card>
    );
}

CarSearchCard.propTypes = {
    carBrands: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })),
    onSubmit: PropTypes.func.isRequired,
}

export default CarSearchCard;
