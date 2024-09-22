import React from 'react';

const ForecastCard = ({ day, tempMin, tempMax, icon }) => {
  return (
    <div className="forecast-card">
      <h3>{new Date(day).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}</h3>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
      <p>Min: {tempMin.toFixed(1)}°</p>
      <p>Max: {tempMax.toFixed(1)}°</p>
    </div>
  );
};


export default ForecastCard;
