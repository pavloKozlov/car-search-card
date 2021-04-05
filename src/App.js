import './App.css';
import CarFilterCard from './components/CarSearchCard';

function App() {
  return (
    <div className="App">
      <CarFilterCard onSubmit={(formData) => console.log({ formData })} />
    </div>
  );
}

export default App;
