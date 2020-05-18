import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
