import React, { Component } from 'react';

export class EquipmentItem extends Component{
	state = {isSelected : this.props.equipment.bookMultiUnits}
	changeEquipState = (evt) => {
		this.setState({isSelected : evt.target.checked})
		let {equipment, toggleEquipment} = this.props;
		toggleEquipment(equipment);
	}
	render = () => {
		let { equipment, selectEquipment } = this.props;
		return(
			<li>
				{/* {
					equipment.isSelected ? 
					(
						<span className="active" onClick={() => toggleEquipment(equipment) }>
							{equipment.title}
						</span>
					) : 
					(	<span className="inactive" onClick={() => toggleEquipment(equipment) }>
							{equipment.title}
						</span>
					)
				} */}
				<div>Title : {equipment.title}</div>
				<div>Price : {equipment.price}</div>
				<input type="checkbox" onChange = { this.changeEquipState} defaultChecked = {this.props.equipment.bookMultiUnits}/>
				<label htmlFor="">Book multiple units? : {this.state.isSelected.toString()}</label>
				<br/>
				<label htmlFor="">Select? :</label>
				<input type="checkbox" onChange = { () => selectEquipment(equipment)} defaultChecked = {this.props.equipment.isSelected}/>
				<br/>
				{/* <div className="datetime">{bug.createdAt.toString()}</div> */}
			</li>
		)
	}
}