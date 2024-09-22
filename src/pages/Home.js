import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CityName from '../components/CityName';
import Temperature from '../components/Temperature';
import WeatherCondition from '../components/WeatherCondition';
import WeatherIcon from '../components/WeatherIcon';
import ForecastCard from '../components/ForecastCard';
import Search from '../components/Search';

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [unit, setUnit] = useState('C'); 
  const [city, setCity] = useState(() => localStorage.getItem('lastCity') || 'New York'); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '33084332ea5fa9a1e3c371d0b113cbde';

  
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      localStorage.setItem('lastCity', city); // Cache the city
    } catch (error) {
      setError('City not found or network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  
  const getDailyForecast = (list) => {
    const dailyForecasts = [];
    const daysProcessed = new Set(); 

   
    list.forEach(item => {
      const date = new Date(item.dt * 1000); 
      const day = date.toISOString().split('T')[0]; 
      const hours = date.getHours(); 

      if (!daysProcessed.has(day)) {
        if (hours === 12) { 
          dailyForecasts.push(item);
          daysProcessed.add(day);
        } else if (hours >= 9 && hours <= 15) { 
          dailyForecasts.push(item);
          daysProcessed.add(day);
        }
      }
    });

    return dailyForecasts.slice(0, 5);
  };

  
  const fetchForecastData = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const filteredForecast = getDailyForecast(response.data.list); 
      setForecastData(filteredForecast);
    } catch (error) {
      console.error('Error fetching the forecast data:', error);
    }
  };

  
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  
  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
      fetchForecastData(city);
    }
  }, [city]);

  
  const convertTemp = (temp) => {
    return unit === 'C' ? temp : (temp * 9) / 5 + 32;
  };

 
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="weather-container">
 
      <Search onSearch={handleSearch} />

   
      <div className="weather-info">
        <CityName name={weatherData.name} />
        <Temperature temp={convertTemp(weatherData.main.temp)} unit={unit} />
        <WeatherIcon icon={weatherData.weather[0].icon} />
        <WeatherCondition condition={weatherData.weather[0].description} />
        <button className="unit-toggle" onClick={() => setUnit(unit === 'C' ? 'F' : 'C')}>
          Switch to {unit === 'C' ? 'Fahrenheit' : 'Celsius'}
        </button>
      </div>

    
      <div className="forecast-container">
        {forecastData.map((dayData, index) => (
          <ForecastCard
            key={index}
            day={new Date(dayData.dt * 1000).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            tempMin={convertTemp(dayData.main.temp_min)}
            tempMax={convertTemp(dayData.main.temp_max)}
            icon={dayData.weather[0].icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;




