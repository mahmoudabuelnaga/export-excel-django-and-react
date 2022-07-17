import React from 'react';
import './App.css';
import axios from 'axios'
import ExportToExcel from './components/Backend';
import Shrouded from './components/DataShare';

function App() {
  const [data, setData] = React.useState([])
  const fileName = "myfile"; // here enter filename for your excel file

  React.useEffect(() => {
    const fetchData = () =>{
     axios.get('http://127.0.0.1:8000').then(r => setData(r.data) )
    }
    fetchData()
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <Shrouded />
        <hr/>
        <ExportToExcel apiData={data} fileName={fileName} />
      </header>

      
      
    </div>
  );
}

export default App;
