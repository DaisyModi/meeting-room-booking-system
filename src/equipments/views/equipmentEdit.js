import React, { Component } from 'react';
import * as equipmentActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
export const browserHistory = createBrowserHistory();

class EquipmentEdit extends Component{
	state = { newEquipmentName : '', bookMultiUnits : true , price : 0, addNewEquipment:null};
	saveDetails = () => {
		this.props.addNewEquipment(this.state.newEquipmentName, this.state.bookMultiUnits, this.state.price)
		window.location.replace("http://localhost:3000/equipment/")
	}
	render = () => {
		let { addNewEquipment } = this.props,
			{ newEquipmentName, bookMultiUnits, price } = this.state;
		return(
			<section className="edit">
				<label htmlFor="">Equipment Name :</label>
				<input type="text" onChange = { evt => this.setState({newEquipmentName : evt.target.value})} />
				<br/>
				<label htmlFor="">Book multiple units? :</label>
				<input type="checkbox" onChange = { evt => this.setState({bookMultiUnits : evt.target.checked})} />
				<br/>
				<label htmlFor="">Price :</label>
				<input type="text" onChange = { evt => this.setState({price : evt.target.valueAsNumber})} />
				<br/>
				<input type="button" value="Add New" onClick={ this.saveDetails }/>
			</section>
		)
	}
}



function mapDispatchToProps(dispatch){
	//console.log("dispatch");
	var equipmentActionDispatchers = bindActionCreators(equipmentActionCreators, dispatch);
	return equipmentActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(EquipmentEdit);
