import "@styles/style.scss";
import Home from "@pages/Home";
import { StudentProvider } from "./context/StudentProvider";

function App() {
  return (
    <StudentProvider>
      <div className="App">
        <Home />
      </div>
    </StudentProvider>
  );
}

export default App;
