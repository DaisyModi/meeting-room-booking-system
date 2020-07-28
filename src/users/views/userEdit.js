import React, { Component } from 'react';
import * as userActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

class UserEdit extends Component{
	state = { role : 'admin', email : "" , password : "", name : "", phone : 0, status : true, isSelected : false, addNewUser:null};
	saveDetails = () => {
		this.props.addNewUser(this.state.role, this.state.email, this.state.password, this.state.name, this.state.phone, this.state.status, this.state.isSelected)
		window.location.replace("http://localhost:3000/user/")
	}
	dismiss = () => {
		window.location.replace("http://localhost:3000/user/")
	}
	render = () => {
		let { addNewUser} = this.props,
			{ name, email, date_time, role, status, isSelected } = this.state;
		return(
			<section className="edit">
				<label htmlFor="role">Role :</label>
				<select id = "role"  onChange = { evt => this.setState({role : evt.target.value})}>
					<option value="admin">Admin</option>
					<option value="editor">Editor</option>
				</select>
				<label htmlFor="name">Name :</label>
				<input id = "name" type="text" onChange = { evt => this.setState({name : evt.target.value})} />
				<br/>
				<label htmlFor="email">Email :</label>
				<input id = "email" type="email" onChange = { evt => this.setState({email : evt.target.value})} />
				<br/>
				<label htmlFor="pass">Password :</label>
				<input id = "pass" type="password" onChange = { evt => this.setState({password : evt.target.value})} />
				<br/>
				<label htmlFor="phone">Phone :</label>
				<input id = "phone" type="number" onChange = { evt => this.setState({phone : evt.target.valueAsNumber})} />
				<br/>
				<label htmlFor="status">Status Active? :</label>
				<input id = "status" type="checkbox" onChange = { evt => this.setState({status : evt.target.checked})} />
				<br/>
				<input type="button" value="Add New" onClick={ this.saveDetails }/>
				<input type="button" value="Cancel" onClick={ this.dismiss }/>
			</section>
		)
	}
}



function mapDispatchToProps(dispatch){
	//console.log("dispatch");
	var userActionDispatchers = bindActionCreators(userActionCreators, dispatch);
	return userActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(UserEdit);
