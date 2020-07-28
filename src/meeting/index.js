import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RoomStats } from './views/roomStats';
// import { BugSort } from './views/bugSort';
import { RoomList } from './views/roomList';

import * as roomActionCreators from './actions';
import * as layoutActionCreators from '../roomLayout/actions';
import { BrowserRouter as Route, Link } from "react-router-dom";

class Meeting extends Component{

	componentDidMount(){
		this.props.loadRooms();
		this.props.loadLayout();
	}
	
	render = () => {
		let {rooms, toggle, layouts } = this.props;
		return(
			<>
				<div>
					<span> 

					<Link to={{
					pathname: '/addNewRoom/',
					state: {	layouts: layouts	}
					}}>						
						<button type="button">
							Add Room
						</button>	
					</Link>
					</span>
				</div>

				
				<RoomList {...{toggle, rooms}} />
				<RoomStats rooms = {rooms}/>
			</>
		)
	}
}



function mapDispatchToProps(dispatch){
	var roomActionDispatchers = bindActionCreators(roomActionCreators, dispatch);
	var layoutActionDispatcher = bindActionCreators(layoutActionCreators,dispatch);
	return {...roomActionDispatchers, ...layoutActionDispatcher};
}

function mapStateToProps({roomData, layoutData}){
	// let bugs = bugsData.filter((bug, index) => index % 2 === spinnerData % 2);
	let rooms = roomData;
	let layouts = layoutData;
	return { rooms : rooms, layouts:layouts }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Meeting);




