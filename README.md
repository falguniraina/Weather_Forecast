
---

# Weather Forecast Application

This is a React.js application that allows users to search for any city worldwide and get real-time weather data along with a 5-day forecast. The app uses two APIs: OpenWeatherMap for weather data and GeoDB Cities for city suggestions.

# Link : https://weather-forecast-one-pied.vercel.app/

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Assumptions](#assumptions)
- [Usage](#usage)
- [Deployment](#deployment)
- [API](#api)
- [License](#license)

## Setup Instructions

### Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (v12.x or higher)
- **npm** (comes with Node.js)

### Steps to Set Up Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies**:

   Inside the project directory, run:

   ```bash
   npm install
   ```

3. **Create a `.env` file**:

   In the root directory of the project, create a `.env` file and add your API keys for OpenWeatherMap and GeoDB Cities:

   ```env
   REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here
   REACT_APP_CITIES_API_KEY=your_geodb_api_key_here
   ```

4. **Start the development server**:

   Run the following command to start the local development server:

   ```bash
   npm start
   ```

   This will launch the app at `http://localhost:3000/`.

---

## Assumptions

During development, the following assumptions were made:

1. **City Data Coverage**:
   - It is assumed that the GeoDB Cities API provides sufficient global coverage for city search functionality, including small and large cities worldwide.

2. **Weather Data Accuracy**:
   - The OpenWeatherMap API provides reliable and accurate weather data for current weather and the 5-day forecast.

3. **API Rate Limits**:
   - Debouncing has been implemented to minimize API requests and avoid exceeding the rate limits of both APIs (GeoDB and OpenWeatherMap).

4. **Environment Variables**:
   - API keys are securely stored in `.env` files and not directly in the codebase.

---

## Usage

### Features

1. **Search for a City**:
   - Type a city's name into the search box, and the dropdown will show suggestions based on the GeoDB Cities API.
   - Select a city from the dropdown or press "Enter" to search.

2. **View Current Weather**:
   - Once a city is selected, the current temperature, weather condition, and an icon will be displayed.
   - The temperature is shown in either Celsius or Fahrenheit, based on user selection.

3. **5-Day Forecast**:
   - Below the current weather, a 5-day forecast will be displayed, showing the min/max temperatures for each day, along with a weather icon.

4. **Toggle Temperature Unit**:
   - Users can toggle between Celsius and Fahrenheit using a button provided in the UI.

---

## API

This application uses the following APIs:

1. **[OpenWeatherMap API](https://openweathermap.org/)**:
   - Fetches current weather and 5-day forecast data.

2. **[GeoDB Cities API](https://rapidapi.com/wirefreethought/api/geodb-cities)**:
   - Provides city suggestions during user input.

### API Keys

You will need to create an account on the respective platforms to get API keys.

- **OpenWeatherMap**: Sign up at [openweathermap.org](https://openweathermap.org/) and generate your API key.
- **GeoDB Cities**: Get your API key from [GeoDB Cities on RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities).

### API Usage

- **OpenWeatherMap API**: Used to fetch weather data, including current temperature and the 5-day forecast.
- **GeoDB Cities API**: Provides city suggestions based on user input.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

