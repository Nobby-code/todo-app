import './App.css';

import Login from './components/login';
import Register from './components/Register';
import { useState } from 'react'

function App() {
  const [logIn, setLogin] = useState(false)
  return (
    <div className="App">
      <Login />
      <Register />
    </div>
  );
}

export default App;
