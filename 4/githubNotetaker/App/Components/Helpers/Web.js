import React, {
	View,
	WebView,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#f6f6ef',
		flexDirection: 'column'
		}		
});

export default class Web extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView url={this.props.url} />
			</View>
		);
	}
}

Web.propTypes = {
	url: React.PropTypes.string.isRequired,
}