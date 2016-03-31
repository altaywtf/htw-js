/*
 * WeatherList Container
 */

import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends React.Component {
	renderWeather(cityData) {

		console.log(cityData);

		const lng = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;

		const temps = cityData.list.map(weather => weather.main.temp - 273);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);

		return (
				<tr key={cityData.city.id}>
					<td>
						<GoogleMap lat={lat} lng={lng} />
					</td>
					<td>
						<Chart data={temps} color="orange" units="C" />
					</td>
					<td>
						<Chart data={pressures} color="grey" units="hPa"/>
					</td>
					<td>
						<Chart data={humidities} color="blue" units="%"/>
					</td>
				</tr>
		);		
	}

	render() {
		return (
			<div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>City</th>
							<th>Temperature (C)</th>
							<th>Pressure (hPa)</th>
							<th>Humidity (%)</th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>
				</table>
			</div>
		);
	}
}

/**
 * [mapStateToProps allows us access to weather data from the state of WeatherReducer as property]
 * @param  {destructured object} weather of the state
 * @return {object}           	 weather of the props
 */
function mapStateToProps( {weather} ) { // { weather } === state.weather
	return { weather }; // { weather } === { weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);