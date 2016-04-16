import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'; // instead of mapDispatchToProps

class CommentBox extends Component {
	constructor(props) {
		super(props);
		this.state = {comment: ''};
	}

	handleChange(event) {
		this.setState({comment: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.saveComment(this.state.comment);
		this.setState({comment: ''});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)} className="CommentBox">
				<h4>Add Comment</h4>
				<textarea 
					value={this.state.comment}
					onChange={this.handleChange.bind(this)}
					/>
				<div>
					<button action="submit">Add Comment</button>
				</div>
			</form>
		);
	}
}

export default connect(null, actions)(CommentBox);