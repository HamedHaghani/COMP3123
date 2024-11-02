import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import StudentInfo from './components/StudentInfo.js';

function App() {
  return (
    <div className="App"  >
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome></Welcome>
        <h2>React Js Programming Week09 Lab Exercise</h2>

        <StudentInfo studentId ="101406701"/>
        <StudentInfo  name="Hamed Haghani"/>
        <p>George Brown college, Toronto</p>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
