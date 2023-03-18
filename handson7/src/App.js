import store from "./Redux/Store";
import { Provider } from "react-redux";
import RouterComponent from "./COMPONENT/Router";

function App() {

  
  return (
    <>
   <Provider store={store}>
      <div className="App">
       <RouterComponent />
      </div>
    </Provider>
    </>
  );
}

export default App;