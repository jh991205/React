import { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import WeatherCard from './components/weatherCard';

function App() {
  const [location, setLocation] = useState('Shanghai');
  const [location1, setLocation1] = useState('WenZhou');

  const handleInputChange = (event) => {
    setLocation(event.target.value);
  };
  const handleInputChange1 = (event) => {
    setLocation1(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setLocation(location);
  };

  const handleFormSubmit1 = (event) => {
    event.preventDefault();
    setLocation1(location1);
  };

  return (
    <div>
      <header>
        <h2>React Weather App</h2>
      </header>
      <div>
        <SearchBar
          location={location}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
        <WeatherCard location={location} />
        <SearchBar
          location={location1}
          onInputChange={handleInputChange1}
          onFormSubmit={handleFormSubmit1}
        />
        <WeatherCard location={location1} />
      </div>
    </div>
  );
}

export default App;