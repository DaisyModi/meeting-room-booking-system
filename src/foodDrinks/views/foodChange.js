import React, { Component } from 'react';
import * as foodActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class FoodChange extends Component
{
    render=()=>{
        return(
			<form >
				<label htmlFor="">Title :</label>
				<input type="text" defaultValue = {this.props.location.state.food.title} onChange = { evt => {this.props.location.state.food.title = evt.target.value}} />
				<br/>
				<label htmlFor="">Price per Attendee :</label>
				<input type="text" defaultValue = {this.props.location.state.food.price} onChange = { evt => {this.props.location.state.food.price = evt.target.value}}  />
				<br/>
				<input type="button" value="Save" onClick={ () => this.props.changeFood(this.props.location.state.food) }/>
			</form>
		)
    }
}

function mapDispatchToProps(dispatch){
	var foodActionDispatchers = bindActionCreators(foodActionCreators, dispatch);
	return foodActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(FoodChange);