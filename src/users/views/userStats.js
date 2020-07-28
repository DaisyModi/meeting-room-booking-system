import React, { Component } from 'react';

export class UserStats extends Component{
	render = () => {
		let { users } = this.props
		return(
			<section /*className="stats"*/>
				<span /*className="closed"*/>3</span>
				<span> / </span>
				<span>{users.length}</span>
			</section>
		);
	}
}