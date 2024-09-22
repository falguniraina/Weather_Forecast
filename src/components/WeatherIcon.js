import React from 'react';

const WeatherIcon = ({ icon }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`; 
  return <img src={iconUrl} alt="Weather Icon" className="weather-icon" />;
};


export default WeatherIcon;
