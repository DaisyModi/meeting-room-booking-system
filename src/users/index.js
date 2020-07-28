import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { UserStats } from './views/userStats';
import { UserEdit } from './views/userEdit';
// import { BugSort } from './views/bugSort';
import { UserList } from './views/userList';

import * as userActionCreators from './actions';
import {BrowserRouter as Route, Link} from "react-router-dom";

class Users extends Component{
	state = {query : '', data : []};
	foo = () => {
		this.props.submitUser(this.state.query)
	}
	componentDidMount(){
		this.props.loadUser();
	}
	render = () => {
		let { users, toggleUser, deleteSelectedUsers, selectUser, changeUser, submitUser, deleteUser, loadUser, activeUsers, inactiveUsers} = this.props;
		return(
			<>
				<div><span> <Link to="/addNewUser/"> <button type = "button">+ Add User</button> </Link></span></div>
				<input type="text" placeholder="Search..." onChange={evt=>this.setState({query:evt.target.value})} />
				<input type="button" value="Submit" onClick={this.foo} />
				{/* <BugStats bugs={bugs} /> */}
				{/* <EquipmentEdit addNewEquipment={addNewEquipment} /> */}
				<input type="button" value="All" onClick={loadUser}/>
				<input type="button" value="Active" onClick={activeUsers}/>
				<input type="button" value="Inactive" onClick={inactiveUsers}/>

				<UserList {...{users, toggleUser, deleteSelectedUsers,selectUser, changeUser, submitUser, deleteUser}} />
				<UserStats users = {users}/>
				

			</>
		)
	}
}

function mapDispatchToProps(dispatch){
	var userActionDispatchers = bindActionCreators(userActionCreators, dispatch);
	return userActionDispatchers;
}

function mapStateToProps({userData}){
	// let bugs = bugsData.filter((bug, index) => index % 2 === spinnerData % 2);
	let users = userData
	return { users : users }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);




