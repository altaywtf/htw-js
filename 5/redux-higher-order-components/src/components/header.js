import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
	auth() {
		this.props.authenticate(!this.props.auth);
	}

	render() {		
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<Link to="/">Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/resources">Resources</Link>
					</li>
					<li className="nav-item">
						<button onClick={this.auth.bind(this)}>
							{this.props.auth ? 'Sign Out' : 'Sign In'}
						</button>
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(Header);