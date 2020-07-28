import React, { Component } from 'react';

export class EquipmentStats extends Component{
	render = () => {
		let { equipments } = this.props
		return(
			<section /*className="stats"*/>
				<span /*className="closed"*/>3</span>
				<span> / </span>
				<span>{equipments.length}</span>
			</section>
		);
	}
}