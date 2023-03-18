import store from "./REDUX/Store";
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