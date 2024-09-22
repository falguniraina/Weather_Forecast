import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
  const API_KEY = '07ed0b82e6msh8893257405ee62bp11342ajsn606441c064c2'; 

  const fetchCities = async (searchTerm) => {
    if (searchTerm.length < 1) return; 

    try {
      const response = await axios.get(API_URL, {
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
        },
        params: {
          namePrefix: searchTerm,
          limit: 10, 
          types: 'CITY',
        },
      });

      const cityNames = response.data.data.map(
        (city) => `${city.name}, ${city.countryCode}`
      );
      setCities(cityNames);
      setDropdownVisible(true); 
    } catch (error) {
      console.error('Error fetching cities:', error);
      setCities([]); 
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      fetchCities(value);
    } else {
      setDropdownVisible(false); 
    }
  };

  const handleCitySelect = (city) => {
    setQuery(city);
    setDropdownVisible(false); 
    onSearch(city); 
  };

  const handleSearchClick = () => {
    if (query.trim()) {
      onSearch(query);
      setDropdownVisible(false); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      handleSearchClick();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search for a city..."
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        onFocus={() => setDropdownVisible(true)}
      />
      <button onClick={handleSearchClick}>Search</button>

      {dropdownVisible && cities.length > 0 && (
        <ul className="dropdown-modal">
          {cities.map((city, index) => (
            <li key={index} onClick={() => handleCitySelect(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
