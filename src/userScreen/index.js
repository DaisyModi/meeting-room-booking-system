import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import { RoomListForUsers } from './views/roomList';
import * as roomActionCreators from '../meeting/actions';


class RoomsForUser extends Component{

	componentDidMount(){
		this.props.loadRooms();
	}
	
	render = () => {
		let { rooms } = this.props;
		return(
			<>	
				<div class="card" style={{width: 85 + 'em'}}>
					<h3 class="card-header">Step 1 : Meeting Rooms</h3>
					<div class="card-block justify-content-center">
						<RoomListForUsers {...{rooms}} /> 
					</div>
				</div>
			</>
		)
	}
}

function mapDispatchToProps(dispatch){
	var roomActionDispatchers = bindActionCreators(roomActionCreators, dispatch);
	return roomActionDispatchers;
}

function mapStateToProps({roomData}){
	let rooms = roomData
	return { rooms : rooms }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomsForUser);




