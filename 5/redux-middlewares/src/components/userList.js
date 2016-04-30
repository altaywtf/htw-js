import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../redux/users';

class UserList extends Component {	
	renderUserList(users) {
		return (
			users.map((user, i) => {
				return (
					<div className="card card-block">
						<h4 className="card-title">{user.name}</h4>
						<p className="card-text">{user.company.name}</p>
						<a href="#" className="btn btn-primary">Email</a>
					</div>
					)
			})
		);
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<button onClick={this.props.dispatch.fetchUsers}> Fetch </button>
				{this.renderUserList(this.props.users)}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		users: state.users
	}
}

function mapDispatchToProps(dispatch) {
	return { 
		dispatch: bindActionCreators({fetchUsers}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);