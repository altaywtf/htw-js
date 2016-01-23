import React from 'react';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Unofficial Github Browser v0.1</h1>
				{this.props.children}
			</div>
		);
	}
}

export default App