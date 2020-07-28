import React, { Component } from 'react';
import * as roomActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

class RoomChange extends Component{
	
	


	// saveDetails = () => {
	// 	this.props.changeRoom(this.state.newRoomName, this.state.capacity, this.state.bookings);
	// 	window.location.replace("http://localhost:3000/");
	// }
	
	render = () => {
		return(
			<form /*className="edit"*/>
				<label htmlFor="">Room Name :</label>
				<input type="text" defaultValue = {this.props.location.state.room.title} onChange = { evt => {this.props.location.state.room.title = evt.target.value}} /*onChange = {evt => { console.log(evt.target.value)}}*/ />
				{/* {this.props.location.state.room.name} */}
				<br/>
				<label htmlFor="">Capacity :</label>
				<input type="text" defaultValue = {this.props.location.state.room.capacity} onChange = { evt => {this.props.location.state.room.capacity = evt.target.value}} /*onChange = { evt => this.setState({capacity : evt.target.value})}*/ />
				<br/>
				<label htmlFor="">Bookings :</label>
				<input type="text" defaultValue = {this.props.location.state.room.noOfBookings} onChange = { evt => {this.props.location.state.room.noOfBookings = evt.target.value}} /*onChange = { evt => this.setState({bookings : evt.target.value})}*/ />
				<br/>
				<input type="button" value="Change Room Data" onClick={ () => this.props.changeRoom(this.props.location.state.room) }/>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch){
	console.log("dispatch");
	var roomActionDispatchers = bindActionCreators(roomActionCreators, dispatch);
	return roomActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(RoomChange);