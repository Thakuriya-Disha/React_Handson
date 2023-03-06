import HigherOrderCompo from './Component/HigherOrderCompo';
import CounterComponent from './Component/Counter';

function App() {
  return (
    <div className="App">
      <HigherOrderCompo data={CounterComponent } />
    </div>
  );
}

export default App;