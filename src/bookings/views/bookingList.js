import React, { Component } from 'react';
import { BookingItem } from './bookingItem';

export class BookingList extends Component{

	render = () => {
		let { bookings, changeStatus } = this.props,
			bookingItems = bookings.map((booking, index) => (
				<BookingItem booking={booking}  key={index} changeStatus={changeStatus}/>
			));
		return(
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							{/* <th scope="col">#</th> */}
							{/* <th scope="col">Image</th> */}
							<th scope="col">Room Name</th>
							<th scope="col">Date</th>
							<th scope="col">Name</th>
							<th scope="col">Total Amount</th>
							<th scope="col">Status</th>
						</tr>
					</thead>

					<tbody>
						{bookingItems}
					</tbody>

				</table>
			</div>
			
		)
	}
}