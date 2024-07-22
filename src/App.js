// import { useEffect, useState } from 'react';
import './App.css';
import SideBar from './components/SideContent';
import MainContent from './components/MainContent';
import data from "./components/data.js"
// import axios from 'axios';

function App() {
  const moveData = data
  // const [moveData, setMoveData] = useState(data)
  // const DATA_URL = "http://test.boxigo.in/api_assignment.json";

  // useEffect(() => { 
  //   axios.get(DATA_URL, {
  //     headers:{"Access-Control-Allow-Origin":"*"}
  //   }).then(res => {
  //     console.log(res)
  //     setMoveData(res)
  //   })
  // }, [])
  
  return (
    <div className='App-Content' >
      <SideBar />
      <MainContent moves={moveData} />
    </div>
  );
}

export default App;
