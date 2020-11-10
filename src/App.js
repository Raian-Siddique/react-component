import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Rubel", "Jalil", "Alomgir"];
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React</h1>
        <Person nayok={nayoks[0]} fetna="Moushumi"></Person>
        <Person nayok={nayoks[1]} fetna="Shabnur"></Person>
        <Person nayok="Manna" fetna="Purnima"></Person>
      </header>
    </div>
  );
}
function Person(props) {
  var girgity = {
    border: "3px solid cyan",
    padding: "5px",
    margin: "10px",
  };
  return (
    // <div style={{ border: "3px solid salmon", padding: "5px", margin: "5px" }}>
    <div style={girgity}>
      <h1>Name:{props.nayok}</h1>
      <h2>partnar shoytan of:{props.fetna}</h2>
      <h3> Army of the shaytan</h3>
    </div>
  );
}
export default App;
