import React from 'react'
import { Link } from 'react-router'

class List extends React.Component {
	render() {
		return (
			<div>
				<p>Pls chose a repo</p>
				<ul>
                	<li><Link to="/detail/react">React</Link></li>
                	<li><Link to="/detail/react-native">React Native</Link></li>
                	<li><Link to="/detail/jest">Jest</Link></li>
				</ul>
			</div>
		)
	}
}

export default List