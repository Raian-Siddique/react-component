import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <Person></Person>
      </header>
    </div>
  );
}
function Person() {
  return <h2>Habib vai is a function </h2>;
}
export default App;
