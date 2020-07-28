import React, { Component } from 'react';
import { UserItem } from './userItem';

export class UserList extends Component{

	render = () => {
		console.log(this.props.users)
		let { users, toggleUser, deleteSelectedUsers, selectUser, deleteUser, changeUser, submitUser} = this.props,
		userItems = users.map((user, index) => (
				<UserItem user={user}  key={index} toggleUser={toggleUser} selectUser ={selectUser} deleteUser = {deleteUser} changeUser = {changeUser} submitUser= {submitUser}/>
			));
		return(
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							{/* <th scope="col">#</th> */}
							{/* <th scope="col">Image</th> */}
							<th scope="col">Select</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Registration date/time</th>
							<th scope="col">Role</th>
							<th scope="col">Status</th>
							<th scope="col">   </th>
						</tr>
					</thead>
					<tbody>
						{userItems}
					</tbody>

				</table>
				<input type="button" value="Remove Selected" onClick={() => deleteSelectedUsers()}/>
			</div>
		)
	}
}