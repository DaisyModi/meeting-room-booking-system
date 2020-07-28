import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



export class UserItem extends Component{
	state = {status : this.props.user.status}
	changeUserState = (evt) => {
		this.setState({status : evt.target.checked})
		let {user, toggleUser} = this.props;
		toggleUser(user);
	}
	render = () => {
		let { user, selectUser, deleteUser } = this.props;
		return(
			<tr>
				<td><input id = "select" type="checkbox" onChange = { () => selectUser(user)} defaultChecked = {this.props.user.isSelected}/>
				</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.createdAt.toString()}</td>
				<td>{user.role}</td>			

				{
					user.status?
					(
						<td>
							<span className="confirmed">
								<input type="checkbox" onChange = { this.changeUserState} defaultChecked = {this.props.user.status}/>
								<label htmlFor="">Active</label>
							</span>
						</td>
					) :
					(
						<td>
							<span className="cancelled">
							<input type="checkbox" onChange = { this.changeUserState} defaultChecked = {this.props.user.status}/>
								<label htmlFor="">Inactive</label>
							</span>
						</td>
					)
				}
				<td>
					<Link to= {{pathname : "/userChange/", state :{user: user}} }>
						<input type="button" value="Edit" />
					</Link> 
				</td>
			</tr>
		)
	}
}