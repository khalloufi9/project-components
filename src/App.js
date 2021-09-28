import logo from './logo.svg';
import './App.css';
import Profile from  './components/ProfilePhoto.js';
import Name from  './components/FullName.js';
import Address from  './components/Adress.js';

function App() {
  return (
    <div className="App">
     <Profile/>
     <Name/>
     <Address/>
    </div>
  );
}

export default App;
