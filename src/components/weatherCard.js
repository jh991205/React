import { useState, useEffect } from 'react';

function WeatherCard({ location }) {
  const [apiData, setApiData] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setApiData(data));
  }, [apiUrl]);

  const kelvinToFahrenheit = (kelvin) => {
    return ((kelvin - 273.15) * 9/5 + 32);
  };

  return (
    <div>
      {apiData.main ? (
        <div>
          <img
            src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
          />

          <h2>
            {kelvinToFahrenheit(apiData.main.temp)}&deg; F
          </h2>

          <div>
            <p>{apiData.name}</p>
          </div>

            <p>{apiData.weather[0].main}</p>

            
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default WeatherCard;