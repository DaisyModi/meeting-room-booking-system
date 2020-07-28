import React, { Component } from 'react';
import { RoomItem } from './roomItem';

export class RoomList extends Component{

	render = () => {
		let { rooms, toggle } = this.props,
			roomItems = rooms.map((room, index) => (
				<RoomItem room={room}  key={index} toggle={toggle}/>
			));
		return(
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							{/* <th scope="col">#</th> */}
							{/* <th scope="col">Image</th> */}
							<th scope="col">Name</th>
							<th scope="col">Capacity</th>
							<th scope="col">Booking</th>
							<th scope="col">Status</th>
						</tr>
					</thead>

					<tbody>
						{roomItems}
					</tbody>

				</table>
			</div>
			
		)
	}
}