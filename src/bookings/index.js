import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { RoomStats } from './views/roomStats';
import  BookingAdd  from './views/bookingAdd';
// // import { BugSort } from './views/bugSort';
import { BookingList } from './views/bookingList';

import * as bookingActionCreators from './actions';
import * as roomActionCreators from '../meeting/actions';
import * as layoutActionCreators from '../roomLayout/actions';
import * as equipmentActionCreators from '../equipments/actions';


import { BrowserRouter as Route, Link } from "react-router-dom";

class Bookings extends Component{

	componentDidMount(){
		this.props.loadBookings();	
		this.props.loadRooms();
		this.props.loadLayout();
		this.props.loadEquipment();
	}
	
	render = () => {
		let {bookings, equipments, changeStatus, roomNames, layoutNames } = this.props;
		console.log("inside bookings ",roomNames);
		return(
			<>
				<div>
					<span> 

					<Link to={{
					pathname: '/addNewBooking',
					state: {	roomNames: roomNames, layoutNames:layoutNames, equipments:equipments	}
					}}>						
						<button type="button">
							Add Booking
						</button>	
					</Link>
						
					</span>
				</div>		
				<BookingList {...{changeStatus, bookings}} />
			</>
		)
	}
}



function mapDispatchToProps(dispatch){
	var bookingActionDispatchers = bindActionCreators(bookingActionCreators, dispatch);
	var roomActionDispatcher = bindActionCreators(roomActionCreators,dispatch);
	var layoutActionDispatcher = bindActionCreators(layoutActionCreators,dispatch);
	var equipmentActionDispatcher = bindActionCreators(equipmentActionCreators,dispatch);

	return {...roomActionDispatcher, ...bookingActionDispatchers, ...layoutActionDispatcher, ...equipmentActionDispatcher} ;
}

function mapStateToProps(storeData){
	console.log("store data", storeData);
	
	
	let {bookingData,roomData, layoutData, equipmentData} = storeData;

	let bookings = bookingData;
	let equipments = equipmentData;
	let roomNames = roomData.map(room => room.name);
	let layoutNames = layoutData.map(layout => layout.title)

	console.log("roomsData", roomData);
	console.log("bookingData", bookingData);
	return { bookings : bookings,roomNames:roomNames, layoutNames:layoutNames, equipments:equipments }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookings);




