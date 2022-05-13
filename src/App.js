import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./components/HomePage";
import Table from "./Table"

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <HomePage />
        {/* <Table/> */}
      </Provider>
    </div>
  );
}

export default App;
