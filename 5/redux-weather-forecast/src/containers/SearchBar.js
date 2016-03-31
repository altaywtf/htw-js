/*
 * SearchBar Container
 */

import React from 'react';
import { connect } from 'react-redux'; // for binding react with redux
import { bindActionCreators } from 'redux'; // to bindActionCreators
import { fetchWeather } from '../actions/index'; // fetch request function for making ajax calls

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { term: ''};
	}

	onInputChange(event) {
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		// Fetching Weather Data by Calling the Action Creator
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		return (
			<div>
				<form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
					<input 
						style={ {textTransform: 'capitalize'} } 
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange.bind(this)} 
						placeholder="Get a Five Day Forecast in Your Favorite Cities" />
					<span className="input-group-btn">
						<button className="btn btn-secondary">Search</button>
					</span>
				</form>
			</div>
		);
	}
}

/**
 * [mapDispatchToProps description]
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

/**
 * Since we are not passing any state, 
 * we wrote null as first argument.
 */
export default connect(null, mapDispatchToProps)(SearchBar);