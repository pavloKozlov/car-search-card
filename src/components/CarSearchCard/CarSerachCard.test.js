import { shallow } from 'enzyme';
import CarSearchCard from './CarSearchCard';
import LoadingOverflow from '../LoadingOverflow';
import Button from '../Button';

const defaultProps = {
    onBrandSelect: jest.fn(),
    onSubmit: jest.fn(),
};

const testCarBrands = [{
    id: 'test-id-1',
    name: 'test-name-1',
}, {
    id: 'test-id-2',
    name: 'test-name-2',
}];

const testCarModels = [{
    id: 'test-model-id-1',
    name: 'test-model-name-1',
}, {
    id: 'test-model-id-2',
    name: 'test-model-name-2',
}, {
    id: 'test-model-id-3',
    name: 'test-model-name-3',
}, {
    id: 'test-model-id-4',
    name: 'test-model-name-4',
}];

describe('CarSearchCard', () => {
    const render = (props = {}) => shallow(<CarSearchCard {...{
        ...defaultProps,
        ...props
    }} />);

    describe('loading indicator', () => {
        it('should display loading indicator when isLoading === true', () => {
            const wrapper = render({ isLoading: true });
            expect(wrapper.find(LoadingOverflow).exists()).toBe(true);
        });

        it('should not display loading indicator when isLoading === false', () => {
            const wrapper = render({ isLoading: false });
            expect(wrapper.find(LoadingOverflow).exists()).toBe(false);
        });
    });

    describe('car brands drop down', () => {
        it('should render DropDown component with id S1', () => {
            const wrapper = render();
            const dropDown = wrapper.find('#S1');
            expect(dropDown.exists()).toBe(true);
        });

        it('should set carBrands parameter to the DropDown component', () => {
            const wrapper = render({ carBrands: testCarBrands });
            const dropDown = wrapper.find('#S1');
            expect(dropDown.prop('options')).toEqual(testCarBrands);
        });

        it('should call onBrandSelect callback when car brand is selected', () => {
            const brandId = 'test-brand-id';
            const onBrandSelect = jest.fn();
            const wrapper = render({ testCarBrands, onBrandSelect });
            const dropDown = wrapper.find('#S1');
            dropDown.prop('onChange')(brandId);
            expect(onBrandSelect.mock.calls.length).toBe(1);
            expect(onBrandSelect.mock.calls[0][0]).toBe(brandId);
        });
    });

    describe('car models drop down', () => {
        it('should render DropDown component with id S2', () => {
            const wrapper = render();
            const dropDown = wrapper.find('#S2');
            expect(dropDown.exists()).toBe(true);
        });

        it('should set carModels parameter to the DropDown component', () => {
            const wrapper = render({ carModels: testCarModels });
            const dropDown = wrapper.find('#S2');
            expect(dropDown.prop('options')).toEqual(testCarModels);
        });
    });

    describe('keywords input', () => {
        it('should render Input component with id T', () => {
            const wrapper = render();
            const input = wrapper.find('#T');
            expect(input.exists()).toBe(true);
        });
    });

    describe('submit button', () => {
        it('should render submit button with id B', () => {
            const wrapper = render();
            const button = wrapper.find(Button);
            expect(button.prop('id')).toBe('B');
            expect(button.prop('type')).toBe('submit');
        });

        it('should render disabled submit button if no values are selected', () => {
            const wrapper = render();
            const button = wrapper.find('#B');
            expect(button.prop('disabled')).toBe(true);
        });

        it('should render enabled submit button if card brand is selected', () => {
            const wrapper = render();
            const dropDown = wrapper.find('#S1');
            dropDown.simulate('change', 'test brand id');

            const button = wrapper.find('#B');
            expect(button.prop('disabled')).toBe(false);
        });

        it('should render enabled submit button if keyword is not empty', () => {
            const wrapper = render();
            const input = wrapper.find('#T');
            input.simulate('change', { target: { value: 'test keyword' } });

            const button = wrapper.find('#B');
            expect(button.prop('disabled')).toBe(false);
        });
    });

    it('should call onSubmit callback when form is submitted', () => {
        const onSubmit = jest.fn();
        const wrapper = render({ carBrands: testCarBrands, carModels: testCarModels, onSubmit });

        // set brand value
        wrapper.find('#S1').simulate('change', testCarBrands[0].id);
        // set model value
        wrapper.find('#S2').simulate('change', testCarModels[0].id);
        // set keyword
        wrapper.find('#T').simulate('change', 'test keyword');

        wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
        expect(onSubmit.mock.calls.length).toBe(1);
    });
});
