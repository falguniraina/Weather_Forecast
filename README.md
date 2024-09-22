Weather Forecast Application
This is a React.js application that allows users to search for any city worldwide and get real-time weather data along with a 5-day forecast. The app uses two APIs: OpenWeatherMap for weather data and GeoDB Cities for city suggestions.

Table of Contents
Setup Instructions
Assumptions
Usage
Deployment
API
License
Setup Instructions
Prerequisites
Before running the application, make sure you have the following installed:

Node.js (v12.x or higher)
npm (usually comes with Node.js)
Steps to Set Up Locally
Clone the repository:
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>

Install dependencies:

Inside the project directory, run:
npm install

Create a .env file:

Create a .env file in the root directory of the project and add your API keys for OpenWeatherMap and GeoDB Cities:

REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
REACT_APP_CITIES_API_KEY=your_geodb_api_key_here

Start the development server:

Run the following command to start the local development server:
npm start

This will launch the app at http://localhost:3000/.

Assumptions
During development, the following assumptions were made:

City Data Coverage: It is assumed that GeoDB Cities API provides sufficient global coverage for city search functionality, including small and large cities worldwide.

Weather Data Accuracy: The OpenWeatherMap API provides reliable and accurate weather data for current weather and the 5-day forecast.

API Rate Limits: We implemented debouncing to minimize API requests and avoid hitting the rate limits of both APIs (GeoDB and OpenWeatherMap).

Environment Variables: API keys are stored in .env files and not directly in the codebase for security purposes.

Usage
Features:
Search for a City:

Type a city's name into the search box, and the dropdown will show suggestions based on the GeoDB Cities API.
Select a city from the dropdown or press "Enter" to search.
View Current Weather:

Once a city is selected, the current temperature, weather condition, and an icon will be displayed.
The temperature is shown in either Celsius or Fahrenheit, based on user selection.
5-Day Forecast:

Below the current weather, a 5-day forecast will be displayed, showing the min/max temperatures for each day, along with a weather icon.
Toggle Temperature Unit:

Users can toggle between Celsius and Fahrenheit using a button provided in the UI.

API
This application uses the following APIs:

OpenWeatherMap API: For fetching current weather and 5-day forecast data.
GeoDB Cities API: For fetching city suggestions during user input.
API Keys:
You need to create an account on the respective platforms to get API keys.

OpenWeatherMap: Sign up at openweathermap.org and generate your API key.
GeoDB Cities: Get your API key from GeoDB Cities on RapidAPI.
API Usage:
OpenWeatherMap API: Used to fetch weather data, including current temperature and 5-day forecast.
GeoDB Cities API: Provides city suggestions based on user input.
License
This project is licensed under the MIT License. See the LICENSE file for details.
