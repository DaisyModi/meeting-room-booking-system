import React, { Component } from 'react';
import { RoomItemForUsers } from './roomItem';

export class RoomListForUsers extends Component{
	render = () => {
		let { rooms } = this.props,
			roomItems = rooms.map((room, index) => (
				<RoomItemForUsers room={room}  key={index} />
			));
		return(
			<div className="table-responsive">
				<table borderless>
					<tbody>
						{roomItems}
					</tbody>
				</table>
			</div>
		)
	}
}