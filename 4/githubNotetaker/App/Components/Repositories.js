import React, {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableHighlight
} from 'react-native';

import Badge from './Badge';
import Seperator from './Helpers/Seperator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 1,
    padding: 10
  },
  name: {
    color: '#151515',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  stars: {
    color: '#EB9532',
    fontSize: 14,
    paddingBottom: 5
  },
  description: {
  	color: '#424242',
    fontSize: 14,
    paddingBottom: 5
  }
});

export default class Repositories extends React.Component {

	openPage(url){
		console.log('the url is', url);
	}

	render() {
		const repos = this.props.repos;

		const list = repos.map((item, index) => {
      const desc = repos[index].description ? <Text style={styles.description}> {repos[index].description} </Text> : <View/>;
			return (
				<View key={index}>
					<View style={styles.rowContainer}>
						<TouchableHighlight
							onPress={this.openPage.bind(this, repos[index].html_url)}
							underlaycolor='#BDC3C7'>
							<Text style={styles.name}>{repos[index].name}</Text>
						</TouchableHighlight>
						<Text style={styles.stars}> Stars: {repos[index].stargazers_count > 0 ? repos[index].stargazers_count : ':('} </Text>
						{desc}
					</View>
					<Seperator />
				</View>
				)
		});

		return (
			<ScrollView style={styles.container}>
				<Badge userInfo={this.props.userInfo} />
				{list}
			</ScrollView>
		);
	}

};

Repositories.propTypes = {
	userInfo: React.PropTypes.object.isRequired,
	repos: React.PropTypes.array.isRequired,
}
