import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "b6b9a55a8207649a609ae3b048e3c350";

// Instance of app uses react component
class App extends React.Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.name.city.value;
    const country = e.target.elements.name.country.value;


    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return ( // JSX portion
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};

export default App; // Make available for other files
