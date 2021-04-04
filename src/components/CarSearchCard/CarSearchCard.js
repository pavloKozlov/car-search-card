import React from 'react';
import withLabel from '../../hoc/withLabel';
import Card from '../Card';
import DropDown from '../DropDown';
import Input from '../Input';

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
const CarSearchCard = () => (
    <Card title="Buy a car">
        <LabeledDropDown label="Brand:" className="S1" options={options} onChange={(value) => console.log(value)} prompt="- All Brands -" />
        <LabeledDropDown label="Model:" className="S2" options={options} onChange={(value) => console.log(value)} prompt="- Select a brand first -" />
        <LabeledInput label="Keyword:" onChange={(value) => console.log(value)}/>
    </Card>
);

export default CarSearchCard;
