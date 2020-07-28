import React, { Component } from 'react';

export class EquipmentListItem extends Component{
	state = { costForItem : 0}
	handleChange = (event) => {
		this.props.onEquipmentChange(this.props.index, event.target.value*this.props.equipment.price);
	}
	render = () => {
		console.log("cost = ", this.state.costForItem);
		let {equipment} = this.props;
		return(
			<tr>		
				<td>{equipment.title}</td>
				<td>
					<input type="number" onChange = { this.handleChange } />
				</td>				
				<td>{equipment.price}</td>			
			</tr>
		)
	}
}