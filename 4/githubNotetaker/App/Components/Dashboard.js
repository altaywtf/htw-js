'use strict';

import React from 'react-native';
import {
	Text,
	View,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

export default class Dashboard extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Test</Text>
				<Text>{this.props.userInfo.login}</Text>
			</View>
		);
	}
}
