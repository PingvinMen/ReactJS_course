import logo from './logo.svg';
import './App.css';

import MessageList from './Message';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <MessageList />
        
      </header>
    </div>
  );
}

export default App;