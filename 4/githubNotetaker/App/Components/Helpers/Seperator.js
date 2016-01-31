import React, {
	View,
	StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
	sepearator: {
		height: 1,
		backgroundColor: '#E4E4E4',
		flex: 1,
		marginLeft: 10,
		marginRight: 10
	}
});

export default class Seperator extends React.Component {
	render() {
		return (
			<View style={styles.sepearator}></View>
		);
	}
}
