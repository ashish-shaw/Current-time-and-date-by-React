import "./styles.css";
const name = "Ashish Shaw";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
export default function App() {
  return (
    <div className="App">
      <h1>Hello My Name is {name}</h1>
      <p>Today's date = {date}</p>
      <p>Current time = {time}</p>
    </div>
  );
}
