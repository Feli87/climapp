import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Cards from './components/Cards'
import Footer from './components/Footer'
import swal from '@sweetalert/with-react'
function App() {
  
    const [cities, setCities] = useState([]);
    return (
      <div className="App">
        <Nav onSearch={onSearch} />
        <Cards cities={cities} onClose={onClose}/>
        <div>
          <Footer/>
        </div>
      </div>
    );


    function onSearch(ciudad) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=a5e266e358163159e945a3eab9538ab8&lang=es`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon,
              pressure: recurso.main.pressure,
              humidity: recurso.main.humidity,
              sea_level: recurso.main.sea_level,
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            swal(<h3 className="text-alert">Without results</h3>, {
              className: "alert",
              buttons: false,
              timer: 2000,
            });
        
          }
        });
  
      }
      function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
        swal(<h3 className="text-alert">Item removed</h3>, {
          className: "alert",
          buttons: false,
          timer: 2000,
        });
      }
  }






export default App;
