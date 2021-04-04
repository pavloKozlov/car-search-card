import DropDown from './DropDown';
import { shallow } from 'enzyme';

const defaultOptions = [{
    id: 'a',
    label: 'label 1',
}, {
    id: 'b',
    label: 'label 2',
}, {
    id: 'c',
    label: 'label 3',
}, {
    id: 'd',
    label: 'label 4',
}
];

const prompt = 'Select something';

describe('DropDown', () => {
    const render = ({options = defaultOptions, prompt = '', onChange = () => {}} = {}) => shallow(
        <DropDown {...{
            options,
            prompt,
            onChange,
        }} />
    );

    it('should render prompt value when no options are selected', () => {
        const wrapper = render({ prompt });
        expect(wrapper.find('option').get(0).props.children).toBe(prompt);
    });

    it('should render empty prompt value when prompt prop is not specified', () => {
        const wrapper = render();
        expect(wrapper.find('option').get(0).props.children).toBe('');
    });

    it('should render options in dropdown', () => {
        const wrapper = render({ prompt });
        const result = wrapper.find('option')
            .map((elm) => ({
                id: elm.prop('value'),
                label: elm.text()
            }));
        expect(result).toEqual([
            {id: '', label: prompt},
            ...defaultOptions
        ]);
    });

    it('should render no options in dropdown expect prompt if no options passed with props', () => {
        const wrapper = render({ options: [], prompt });
        const result = wrapper.find('option')
            .map((elm) => ({
                id: elm.prop('value'),
                label: elm.text()
            }));
        expect(result).toEqual([
            {id: '', label: prompt},
        ]);
    });

    it('should call onChange callback with selected value when the option is selected', () => {
        const onChange = jest.fn();
        const wrapper = render({ onChange });
        wrapper.simulate('change', { target: { value: defaultOptions[2].value }});
        expect(onChange.mock.calls.length).toBe(1);
        expect(onChange.mock.calls[0][0]).toBe(defaultOptions[2].value);
    });
});
