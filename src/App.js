import logo from './OIP.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sportreactjs la APP del entretenimiento y vida sana.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explora mas
        </a>
      </header>
    </div>
  );
}

export default App;
