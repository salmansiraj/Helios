import React from 'react';

const Weather = (props) => {
  return (
    <div>
      { props.city && props.country && <p> Location: {props.city}, {props.country}  </p>}
      { props.temperature && props.description && <p> Temperature: {props.temperature}, {props.description} </p>}
      { props.humidity && <p> Humidity: {props.humidity} </p> }
      { props.error && <p> {props.error} </p>}
    </div>
  )
}

export default Weather;
