import './App.css';
import Card from './components/Card';
import DropDown from './components/DropDown';
import withLabel from './hoc/withLabel';

const LabeledDropDown = withLabel(DropDown);

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

function App() {
  return (
    <div className="App">
      <Card title="Buy a car">
        <LabeledDropDown label="Brand:" className="S1" options={options} onChange={(value) => console.log(value)} prompt="- All Brands -" />
        <LabeledDropDown label="Model:" className="S2" options={options} onChange={(value) => console.log(value)} prompt="- Select a brand first -" />
      </Card>
    </div>
  );
}

export default App;
