import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100 font-poppins">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">🌤️ Weather App</h2>

        {/* Input Box */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={fetchWeather}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-r-lg transition-all duration-300"
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Weather Result */}
        {weather && (
          <div className="mt-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-inner">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {weather.name}, {weather.sys.country}
            </h3>
            <p className="text-4xl font-bold text-blue-600 mb-2">
              {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-gray-600 mb-4">
              {weather.weather[0].description}
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-700">
              <div>
                💧 <span className="font-medium">{weather.main.humidity}%</span>
                <p>Humidity</p>
              </div>
              <div>
                🌬️ <span className="font-medium">{weather.wind.speed} m/s</span>
                <p>Wind</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
