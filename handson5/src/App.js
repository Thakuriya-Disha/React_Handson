import HigherOrderCompo from './Components/HigherOrderCompo';
import CounterComponent from './Components/Counter';

function App() {
  return (
    <div className="App">
      <HigherOrderCompo data={CounterComponent } />
    </div>
  );
}

export default App;