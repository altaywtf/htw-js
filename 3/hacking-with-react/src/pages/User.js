import React from 'react'
import ajax from 'superagent'

class User extends React.Component {

	constructor(props) {
		super(props)
		this.state = { events: [] }
	}

	componentWillMount() {
		const baseURL = 'https://api.github.com/users'

		ajax.get(`${baseURL}/${this.props.params.user}/events`)
			.end((error, response) => {
				if(!error && response){
					this.setState({events: response.body })
				} else {
					console.log('Error fetching user data', error)
				}
			})
	}

	render() {
		return (
			<div>
				<ul>
			        {this.state.events.map((event, index) => {
			            const eventType = event.type
			            const repoName = event.repo.name
			            const creationDate = event.created_at

			            return (<li key={index}>
			                <strong>{repoName}</strong>: {eventType}
			                at {creationDate}.
			            </li>)
			        })}
			    </ul>
			</div>
		)
	}
}

export default User