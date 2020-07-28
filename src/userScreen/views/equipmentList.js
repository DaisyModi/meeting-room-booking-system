import React, { Component } from 'react';

export class EquipmentList extends Component{

	render = () => {
		let { equipments,addEquipments } = this.props;
		return(
			<>
			<tr>
				
				<td scope="col"><input type="checkbox" onChange={()=>addEquipments(equipments)}/></td>
				<td scope="col">{equipments.title}</td>
				<td scope="col">{equipments.price}</td>
			</tr>
			</>
		)
	}
}