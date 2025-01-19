import React, { useState, useEffect } from 'react';
import { Search, Cloud, Droplets, Wind, Thermometer, Loader2 } from 'lucide-react';

const API_KEY = 'bd5e378503939ddaee76f12ad7a97608';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
}

function App() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather();
  };

  const getBgImage = () => {
    if (!weather) return 'https://images.unsplash.com/photo-1562155955-1cb2d73488d7?auto=format&fit=crop&w=1920&q=80';
    
    const temp = weather.main.temp;
    
    // Cold weather (below 10°C)
    if (temp < 10) {
      return 'https://images.unsplash.com/photo-1478719059408-592965723cbc?auto=format&fit=crop&w=1920&q=80'; // Snowy mountain landscape
    }
    // Mild weather (10-20°C)
    else if (temp >= 10 && temp < 20) {
      return 'https://images.unsplash.com/photo-1572506645673-3795117ca87a?auto=format&fit=crop&w=1920&q=80'; // Pleasant spring landscape
    }
    // Warm weather (20-30°C)
    else if (temp >= 20 && temp < 30) {
      return 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80'; // Sunny beach
    }
    // Hot weather (30°C and above)
    else {
      return 'https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?auto=format&fit=crop&w=1920&q=80'; // Desert landscape
    }
  };

  const getOverlayOpacity = () => {
    if (!weather) return 0.4;
    const temp = weather.main.temp;
    // Increase overlay opacity for extreme temperatures
    if (temp < 0 || temp > 35) return 0.5;
    return 0.4;
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center transition-all duration-1000"
      style={{ 
        backgroundImage: `url('${getBgImage()}')`,
        backgroundColor: `rgba(0, 0, 0, ${getOverlayOpacity()})`,
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="w-full max-w-md">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="p-6 space-y-6">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a city..."
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-white/60 hover:text-white transition-colors duration-300"
              >
                <Search size={20} />
              </button>
            </form>

            {loading && (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-white" size={40} />
              </div>
            )}

            {error && (
              <div className="text-white text-center p-4 bg-red-500/20 backdrop-blur-md rounded-xl border border-red-500/20">
                {error}
              </div>
            )}

            {weather && !loading && !error && (
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h1 className="text-4xl font-bold text-white tracking-wide">
                    {weather.name}
                  </h1>
                  <p className="text-xl text-white/80 capitalize font-light">
                    {weather.weather[0].description}
                  </p>
                </div>

                <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                      alt={weather.weather[0].description}
                      className="w-40 h-40 relative z-10"
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <div className="text-7xl font-bold text-white tracking-tighter">
                    {Math.round(weather.main.temp)}°
                  </div>
                  <p className="text-white/80 text-lg">
                    Feels like {Math.round(weather.main.feels_like)}°
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 p-6 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <Thermometer className="text-white" size={24} />
                    </div>
                    <span className="text-sm text-white/60">Temperature</span>
                    <span className="text-lg font-semibold text-white">{Math.round(weather.main.temp)}°</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <Droplets className="text-white" size={24} />
                    </div>
                    <span className="text-sm text-white/60">Humidity</span>
                    <span className="text-lg font-semibold text-white">{weather.main.humidity}%</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                      <Wind className="text-white" size={24} />
                    </div>
                    <span className="text-sm text-white/60">Wind Speed</span>
                    <span className="text-lg font-semibold text-white">{weather.wind.speed} m/s</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;