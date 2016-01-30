'use strict';

import React from 'react-native';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	ActivityIndicatorIOS
} from 'react-native';

import api from '../Utils/Api';
import Dashboard from './Dashboard';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			isLoading: false,
			error: false
		}
	}

	// looks for the change in input
	handleChange(event) {
		this.setState({
			username: event.nativeEvent.text
		});
	}

	// updates our indicatorIOS spinner
	// fetches data from github
	// reroute to the next passing view
	handleSubmit(event) {
		this.setState({
			isLoading: true
		});

		api.getBio(this.state.username)
			 .then((res) => {
			 	if(res.message === 'Not Found') {
			 		this.setState({
			 			error: 'User not found',
			 			isLoading: false
			 		});
			 	} else {
		      this.props.navigator.push({
		        title: res.name || 'Select an Option',
		        component: Dashboard,
		        passProps: {userInfo: res}
		      });
		      this.setState({
		        isLoading: false,
		        error: false,
		        username: ''
		      });
		    }

			 })
	}

	render() {
		return (
			<View style={styles.mainContainer}>
				<Text style={styles.title}> Search for a GitHub User </Text>
				<TextInput 
					style={styles.searchInput}
					value={this.state.username}
					onChange={this.handleChange.bind(this)} />
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}
					underlayColor="white">
					<Text style={styles.buttonText}> SEARCH </Text>
				</TouchableHighlight>
			</View>
		);
	}
}