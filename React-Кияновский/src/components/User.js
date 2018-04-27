import React, { Component } from 'react';

class User extends Component {
	render() {
		return (
			<div>
				<h2>React - {this.props.user}</h2>
            <h2>Name - {this.props.name}</h2>
         </div>
		);
	}
}

export default User;