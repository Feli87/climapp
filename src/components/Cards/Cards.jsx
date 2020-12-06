import React from 'react';
import Card from '../Card/Card.jsx';
import './Cards.css';
export default function Cards({cities, onClose}) {
  if(cities && cities.length >= 1){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            key={c.id }
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            humidity={c.humidity}
            pressure={c.pressure}
            seaLevel={c.sea_level}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}

      </div>
      
    );
  } else {
    return(
      <div className="non-cities">You can search and add cities or countries from the form &#8593;</div>
    )
  }
}
