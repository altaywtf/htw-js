import React, {
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
    backgroundColor: '#212121'
  },
  title: {
    marginBottom: 50,
    fontSize: 24,
    textAlign: 'center',
    color: '#fff'
  },
  error: {
  	fontSize: 16,
  	color: '#fff',
  	textAlign: 'center',
  },
  searchInput: {
    height: 50,
    width: 300,
    padding: 10,
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#212121',
    alignSelf: 'center'
  },
  button: {
    height: 50,
    width: 200,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'center',
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
			 			error: 'User not found :(',
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
		const showErr = (
			this.state.error ? <Text style={styles.error}> {this.state.error} </Text> : <View></View>
		);

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
				<ActivityIndicatorIOS
					animating={this.state.isLoading}
					color='#FFF'
					size='large'>
				</ActivityIndicatorIOS>
				{showErr}
			</View>
		);
	}
}