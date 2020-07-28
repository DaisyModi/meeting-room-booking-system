import React, { Component } from 'react';

export class RoomStats extends Component{
	render = () => {
		let { rooms } = this.props
		return(
			<section /*className="stats"*/>
				<span /*className="closed"*/>3</span>
				<span> / </span>
				<span>{rooms.length}</span>
			</section>
		);
	}
}