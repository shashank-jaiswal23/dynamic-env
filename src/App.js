import logo from './logo.svg';
import './App.css';
import { env } from './env'
function App() {
  console.log(env)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>
            <li>
            {env.REACT_APP_ENVIRONMENT}
            </li>
            <li>
            {env.REACT_APP_API_URL}
            </li>
            </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frankcrum
        </a>
      </header>
    </div>
  );
}

export default App;
