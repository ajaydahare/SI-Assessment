import { Provider } from "react-redux";
import Home from "./components/Home";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
