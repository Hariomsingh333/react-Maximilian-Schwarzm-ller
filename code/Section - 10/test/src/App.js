import "./App.css";
import UseContextTest from "./components/UseContextTest";
import UseReducerTest from "./components/UseReducerTest";
import StateContext from "./context/StateContext";

function App() {
  return (
    <StateContext>
      <div className="App">
        <UseReducerTest />
        <UseContextTest />
      </div>
    </StateContext>
  );
}

export default App;
