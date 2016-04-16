import React from 'react';
import { connect } from 'react-redux'; 

const CommentList = (props) => {
	const list = props.comments.map((comment, i) => {
		return (
			<li key={i}>{comment}</li>
		);
	});

	return (
		<ul className="CommentList">
			{list}
		</ul>
	);
};

function mapStateToProps(state) {
	return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);