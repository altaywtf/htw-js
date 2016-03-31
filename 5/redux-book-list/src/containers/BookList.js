/*
 * BookList Container
 */

import React from 'react';
import { connect } from 'react-redux';

// Action Creators 
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {	
	renderList()     {
		return this.props.books.map((book, index) => {
			return (
					<li 
						key={index} 
						className="list-group-item"
						onClick={ () => this.props.selectBook(book) }
						>
						{book.title}
					</li>
				);
		});
	}

	render() {
		return (
			<div className="col-sm-4">
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

/*
 * Whatever is returned from mapToState, will show up as props inside of BookList    
 */
const mapStateToProps = (state) => {
	return {
		books: state.books
	};
}

/*
 * Whenever selectBook is called, the result should be passed to all of our reducers
 * returns bindActionCreators( {obj}, dispatch)
 * items of object refer to the action creator
 */
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/*
 * connect(mampStateToProps, mapDispatchToProps)(React.Component);
 * Promote BookList from a component to a container, it also needs to know about this new dispatch method, selectBook. Make it available as a prop.
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
