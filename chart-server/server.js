 const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 3200;


app.use(cors());



const indiaWeather = [
  { city: 'Chennai', maxTemperature: 36, minTemperature: 28 },
  { city: 'Delhi', maxTemperature: 42, minTemperature: 30 },
  { city: 'Mumbai', maxTemperature: 34, minTemperature: 27 },
  { city: 'Kolkata', maxTemperature: 38, minTemperature: 29 },
  { city: 'Bangalore', maxTemperature: 31, minTemperature: 21 },
  { city: 'Hyderabad', maxTemperature: 35, minTemperature: 25 },
  { city: 'Ahmedabad', maxTemperature: 39, minTemperature: 26 },
  { city: 'Jaipur', maxTemperature: 41, minTemperature: 29 },
  { city: 'Coimbatore', maxTemperature: 33, minTemperature: 22 },
  { city: 'Pune', maxTemperature: 32, minTemperature: 23 }
];


app.get('/api/india-weather', (req, res) => {
  res.json(indiaWeather);
});



app.listen(port, () => {
  console.log(`India Weather API running at http://localhost:${port}`);
});
  
