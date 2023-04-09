import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiData, setApiData] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'shanghai'}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  console.log(apiData)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;