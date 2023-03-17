import CounterCompo from './Components/Counter';
import LifeCycleExampleCompo from './Components/LifeCycle';
import ClickCompo from './Components/ClickCompo';
import HoverCompo from './Components/HoverCompo';

function App() {
  return (
    <div className="App">
     <CounterCompo />
     <br/><hr/><br/>
     <LifeCycleExampleCompo />
     <br/><hr/><br/>
     <ClickCompo />
     <br/><br/><hr/><br/>
      <HoverCompo />
    </div>
  )
}

export default App;
