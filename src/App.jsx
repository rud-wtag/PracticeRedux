import "@styles/style.scss";
import Home from "@pages/Home";
import { StudentProvider } from "./context/StudentProvider";
import { Provider } from "react-redux";
import store from "@redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
