import React, { Component } from 'react';
import * as userActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserChange extends Component
{
    saveDetails = () => {
        this.props.changeUser(this.props.location.state.user)
		window.location.replace("http://localhost:3000/user/")
	}
	dismiss = () => {
		window.location.replace("http://localhost:3000/user/")
	}
    
    render=()=>{
        return(
			<form >
                <p>Role : {this.props.location.state.user.role}</p>
				<label htmlFor="email">Email :</label>
				<input id = "email" type="text" defaultValue = {this.props.location.state.user.email} onChange = { evt => {this.props.location.state.user.email = evt.target.value}} />
				<br/>
                <label htmlFor="pass">Password :</label>
				<input id = "pass" type="password" defaultValue = {this.props.location.state.user.password} onChange = { evt => {this.props.location.state.user.password = evt.target.value}} />
				<br/>
                <label htmlFor="name">Name :</label>
				<input id = "name" type="text" defaultValue = {this.props.location.state.user.name} onChange = { evt => {this.props.location.state.user.name = evt.target.value}} />
				<br/>
                <label htmlFor="phone">Phone :</label>
				<input id = "phone" type="number" defaultValue = {this.props.location.state.user.phone} onChange = { evt => {this.props.location.state.user.phone = evt.target.valueAsNumber}} />
				<br/>
                <p>Status : {this.props.location.state.user.status? "Active" : "Inactive"}</p>
                <p>Registration date/time : {this.props.location.state.user.date}</p>
				<input type="button" value="Save" onClick={this.saveDetails}/>
                <input type="button" value="Cancel" onClick={this.dismiss}/>
			</form>
		)
    }
}

function mapDispatchToProps(dispatch){
	var userActionDispatchers = bindActionCreators(userActionCreators, dispatch);
	return userActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(UserChange);