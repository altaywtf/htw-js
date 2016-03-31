import React from 'react';

// Component - Container Imports
import SearchBar from '../containers/SearchBar';
import WeatherList from '../containers/WeatherList';

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<h1>ReduxWeatherForecast</h1>
      	<SearchBar />
      	<WeatherList />
      </div>
    );
  }
}
