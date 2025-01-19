# Weather App

A beautiful, responsive weather application built with React, TypeScript, and Tailwind CSS. The app features dynamic backgrounds that change based on temperature and real-time weather data from the OpenWeatherMap API.

![Weather App Screenshot](https://images.unsplash.com/photo-1562155955-1cb2d73488d7?auto=format&fit=crop&w=1920&q=80)

## Features

- 🌡️ Real-time weather data display
- 🎨 Dynamic backgrounds that change based on temperature
- 🌫️ Beautiful glassmorphism UI design
- 📱 Fully responsive layout
- 🔍 City search functionality
- 💨 Wind speed, temperature, and humidity indicators
- 🌅 Automatic background transitions
- ✨ Smooth animations and hover effects

## Live Demo

Visit the live application: [Modern Weather App](https://sprightly-naiad-9e3ba5.netlify.app/)

## Technology Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- OpenWeatherMap API
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd weather-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a \`.env\` file in the root directory and add your OpenWeatherMap API key:
\`\`\`env
VITE_WEATHER_API_KEY=your_api_key_here
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

### Building for Production

To create a production build:
\`\`\`bash
npm run build
\`\`\`

## Features in Detail

### Dynamic Backgrounds
The application automatically changes its background based on the current temperature:
- Below 10°C: Snow/cold weather scene
- 10-20°C: Spring landscape
- 20-30°C: Beach scene
- Above 30°C: Desert landscape

### Weather Information
Displays:
- Current temperature
- "Feels like" temperature
- Humidity levels
- Wind speed
- Weather condition with icon
- City name

### UI/UX Features
- Glassmorphism design elements
- Responsive layout for all device sizes
- Interactive hover effects
- Loading states
- Error handling
- Smooth transitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide React](https://lucide.dev/)
- Background images from [Unsplash](https://unsplash.com/)
