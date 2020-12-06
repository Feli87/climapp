import React, { useState } from 'react';
import '../assets/css/App.css';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Cards/Cards';
import Footer from '../components/Footer/Footer';
import swal from '@sweetalert/with-react';
import SearchBar from '../components/SearchBar/SearchBar';
function App() {
    const [cities, setCities] = useState([]);
    return (
      <div className="App">
        <Nav onSearch={onSearch} />
        <div className="sub-nav">
          <div className="sub-sub-nav">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
        <Cards cities={cities} onClose={onClose}/>
        <Footer/>
      </div>
    );

async function onSearch(city) {
 await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a5e266e358163159e945a3eab9538ab8&lang=es`)
  .then(response => response.json())
  .then((data) => {
    if(data.main !== undefined){
      const city = {
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        img: data.weather[0].icon,
        id: data.id,
        wind: data.wind.speed,
        temp: data.main.temp,
        name: data.name,
        weather: data.weather[0].main,
        clouds: data.clouds.all,
        latitud: data.coord.lat,
        longitud: data.coord.lon,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        sea_level: data.main.sea_level
      };
      setCities(oldCities => [...oldCities, city]);
      } else {
        swal(<h3 className="text-alert">Without results</h3>, {
          className: "alert",
          buttons: false,
          timer: 2000
          });
        };
    });
};

function onClose(id) {
  //Remove Item
  setCities(oldCities => oldCities.filter(c => c.id !== id));
  // onClose Alert
  swal(<h3 className="text-alert">Item removed</h3>, {
    className: "alert",
    buttons: false,
    timer: 2000,
    });
  };
};

export default App;
