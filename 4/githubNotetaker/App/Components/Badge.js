import React from 'react-native';

import {
	Text,
	View,
	StyleSheet,
  Image
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 8,
    marginBottom: 5,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});

export default class Badge extends React.Component {
	render() {
		const nameOrHandle = () => {
			if(this.props.userInfo.name){
				return(
					<View>
						<Text style={styles.name}>{this.props.userInfo.name}</Text>
						<Text style={styles.handle}>{this.props.userInfo.login}</Text>
					</View>
				);
			} else {
				return (
						<Text style={styles.handle}>{this.props.userInfo.login}</Text>
				);
			}
		};

		return (
			<View style={styles.container}>
				<Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
				{nameOrHandle()}
			</View>
		);
	}
};

Badge.propTypes = {
	userInfo: React.PropTypes.object.isRequired
}
