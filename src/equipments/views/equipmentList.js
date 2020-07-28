import React, { Component } from 'react';
import { EquipmentItem } from './equipmentItem';

export class EquipmentList extends Component{

	render = () => {
		let { equipments, toggleEquipment, deleteSelected, selectEquipment} = this.props,
		equipmentItems = equipments.map((equipment, index) => (
				<EquipmentItem equipment={equipment}  key={index} toggleEquipment={toggleEquipment} selectEquipment ={selectEquipment} />
			));
		return(
			<section className="list">
				<ol>
					{equipmentItems}
				</ol>
				<input type="button" value="Remove Closed" onClick={() => deleteSelected()}/> 
			</section>
		)
	}
}