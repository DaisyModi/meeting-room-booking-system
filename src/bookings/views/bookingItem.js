import React, { Component } from 'react';

export class BookingItem extends Component{
	state = { selectedStatusValue : 'Pending'}


	handleBookingStatus=(evt)=>{
		this.props.changeStatus(this.props.booking, evt.target.value)
		this.setState({selectedStatusValue : evt.target.value})
	}

	render = () => {
		
		
		let {booking} = this.props;
		// this.state.selectedStatusValue=booking.status;
		// console.log(booking.status);
		return(
			<tr>
			
				<td>{booking.roomName}</td>
				<td>{booking.start_date}</td>
				<td>{booking.client.name}</td>
				<td>{booking.subTotal}</td>			

				{
					booking.status === "Confirmed"?
					(
						<td>
							<span className="confirmed">
								<select value={booking.status} className="selectpicker" onChange = { this.handleBookingStatus}   >
									<option>Confirmed</option>
									<option>Pending</option>
									<option>Cancelled</option>
								</select>
							</span>
						</td>
					) :
					(
						
						booking.status === "Cancelled" ? 
						( 
							<td>
								<span className="cancelled">
									<select value={booking.status} className="selectpicker" onChange = { this.handleBookingStatus}   >
										<option>Confirmed</option>
										<option>Pending</option>
										<option>Cancelled</option>
									</select>
								</span>
							</td>
						)	:
						(
							<td>
								<span className="pending">
									<select value={booking.status} className="selectpicker" onChange = {this.handleBookingStatus}   >
										<option>Confirmed</option>
										<option>Pending</option>
										<option>Cancelled</option>
									</select>
								</span>
							</td>
						)		

					)
				}

				{/* {
					booking.status === "Active"? 
					(	
						<td> 
							<span className="active" onClick={() => toggle(booking) }>							
									{booking.status}						
							</span>
						</td>
					) : 
					(	
						<td>
							<span className="inactive" onClick={() => toggle(booking) }>						
								{booking.status}						
							</span>
						</td>
					)
				} */}


				
			</tr>
		)
	}
}