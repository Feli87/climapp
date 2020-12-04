import React from 'react';
import './Card.css';
import swal from '@sweetalert/with-react'
export default function Card ({min, max, name , humidity, pressure, seaLevel, img, onClose}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="min">Min<span className="min-arrow">&#8595;</span></p>
              <p className="num-min">{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="max">Max<span className="max-arrow">&#8595;</span></p>
              <p className="num-max">{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
            <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
        <div className="text-center mb-1"><button className="btn-full-data" onClick={fullData}>Full Data</button></div>
      </div>
    );

    function fullData(){
      swal(
        <div>
          <h3 className="title-full-data">Full Data</h3>
          <div className="row">
            <div className="col-6"> 
              <p className="text-full-data">City Name: </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">{name} </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">Humidity: </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">{humidity} </p>
            </div>      
            <div className="col-6"> 
              <p className="text-full-data">Pressure: </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">{pressure} </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">Sea Level: </p>
            </div>
            <div className="col-6"> 
              <p className="text-full-data">{seaLevel} </p>
            </div>             
          </div>
        </div>, {
        className: "alert",
        buttons: 'Close',
        dangerMode: true,
      });
    }
};
