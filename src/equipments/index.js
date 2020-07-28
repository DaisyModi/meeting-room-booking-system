import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { EquipmentStats } from './views/equipmentStats';
import { EquipmentEdit } from './views/equipmentEdit';
// import { BugSort } from './views/bugSort';
import { EquipmentList } from './views/equipmentList';

import * as EquipmentActionCreators from './actions';
import {BrowserRouter as Route, Link} from "react-router-dom";


class Equipments extends Component{
	componentDidMount(){
		this.props.loadEquipment();
	}
	render = () => {
		let { equipments, toggleEquipment, deleteSelected, selectEquipment} = this.props;
		return(
			<>
				<div><span> <Link to="/addNewEquipment/"> Add Equipment </Link></span></div>
				{/* <BugStats bugs={bugs} /> */}
				{/* <EquipmentEdit addNewEquipment={addNewEquipment} /> */}
				<EquipmentList {...{toggleEquipment, equipments, deleteSelected,selectEquipment }} />
				<EquipmentStats equipments = {equipments}/>
			</>
		)
	}
}

function mapDispatchToProps(dispatch){
	var equipmentActionDispatchers = bindActionCreators(EquipmentActionCreators, dispatch);
	return equipmentActionDispatchers;
}

function mapStateToProps({equipmentData}){
	// let bugs = bugsData.filter((bug, index) => index % 2 === spinnerData % 2);
	let equipments = equipmentData
	return { equipments : equipments }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Equipments);




