import React, { Component } from 'react';

export class RoomItem extends Component{
	render = () => {
		let { room, toggle } = this.props;
		return(
			<tr>
			
				<td>{room.name}</td>
				<td>{room.capacity}</td>
				<td>{room.bookings}</td>
				

				{
					room.status === "Active"? 
					(	
						<td> 
							<span className="active" onClick={() => toggle(room) }>							
									{room.status}						
							</span>
						</td>
					) : 
					(	
						<td>
							<span className="inactive" onClick={() => toggle(room) }>						
								{room.status}						
							</span>
						</td>
					)
				}
			</tr>
		)
	}
}