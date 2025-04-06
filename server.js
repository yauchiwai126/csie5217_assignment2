// filepath: /Users/marcoyau/Downloads/IM5068 - Homework 3/T13902208_HW3/2/server.js
import bodyParser from 'body-parser';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

let weatherInfo = "";

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Render the index page
app.get('/', (req, res) => {
  res.render('index', { weatherInfo });
});

app.post('/fetchWeather', async (req, res) => {
  const city = req.body.city;
  if (city.trim() !== '') {
    try {
      const apiUrl = `https://wttr.in/${city}?format=%t+%w+%h`;
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data.");
      }
      weatherInfo = await response.text(); // Update weatherInfo with fetched data
    } catch (error) {
      console.error("Error fetching weather data:", error);
      weatherInfo = "Failed to fetch weather data. Please try again later.";
    }
  } else {
    weatherInfo = "Please enter a valid city name.";
  }
  res.redirect('/'); // Redirect back to the main page
});

// Start the server
app.listen(port, () => {
  console.log(`Weather App listening at http://localhost:${port}`);
});