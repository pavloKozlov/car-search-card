import React from 'react';
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
const CarSearchCard = () => {
    return (
        <Card title="Buy a car">
            <form  onSubmit={(e) => {e.preventDefault();console.log('submit')}}>
                <div className="card--body">
                    <LabeledDropDown label="Brand:" id="S1" options={options} onChange={(value) => console.log(value)} prompt="- All Brands -" />
                    <LabeledDropDown label="Model:" id="S2" options={options} onChange={(value) => console.log(value)} prompt="- Select a brand first -" />
                    <LabeledInput label="Keyword:" id="T" onChange={(value) => console.log(value)} />
                </div>
                <hr />
                <div className="card--footer">
                    <Button id="B" type="submit">Search cars</Button>
                </div>
            </form>
        </Card>
    );
}

export default CarSearchCard;
