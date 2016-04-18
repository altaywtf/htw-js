import React, { Component } from 'react';

export function (ComposedComponent) {
	class Auth extends Component {
		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	return Auth;
}
