import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
