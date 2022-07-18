import React from 'react';
import './App.css';
import ExportToExcel from './components/Backend';
import Shrouded from './components/DataShare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Shrouded />
        <hr/>
        <ExportToExcel />
      </header>
    </div>
  );
}

export default App;
