import CounterCompo from './Components/Counter';
import LifeCycleExampleCompo from './Components/LifeCycle';
import ClickCompo from './Components/ClickCompo';
import HoverCompo from './Components/HoverCompo';
import {CounterOne} from './Examples/counterClass';
import CounterTwo from './Examples/counterFunction';

function App() {
  return (
    <div className="App">
      <CounterCompo />
      <br/><br/><hr/><br/>
      <h2> LIFE CYCLE METHODS EXAMPLE</h2>
      <LifeCycleExampleCompo />
      <br/><br/><hr/><br/>
      <h2> HOC EXAMPLE</h2>
      <ClickCompo />
      <br/><br/>
      <HoverCompo />
      <br/><br/><hr/><hr/><br/>
      <CounterOne />
      <br/><br/>
      <CounterTwo />
    </div>
  )
}

export default App;
