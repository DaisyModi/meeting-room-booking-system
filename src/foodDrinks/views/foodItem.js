import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class FoodItem extends Component{
	state={isSelected: this.props.food.isSelected}
	changeState=(evt)=>{
		this.setState({isSelected:!this.state.isSelected})
		let {food, toggleFood}=this.props;
		toggleFood(food);
	}
	render = () => {
		let {food,Delete} = this.props;
		return(
			<tr>
				<input type="checkbox" onChange={this.changeState} defaultChecked={this.props.food.isSelected} />
				<td>{food.title}</td>
				<td>{food.price}</td>
				<td>
					<Link to= {{pathname : "/foodChange", state :{food: food}
				}} >
						<input type="button" value="Edit"/>
					</Link>
				</td>
				<td><input type="button" value="Delete" onClick={()=>Delete(food)}/></td>
			</tr>
		)
	}
}