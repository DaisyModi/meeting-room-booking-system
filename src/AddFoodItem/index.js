import React, { Component } from 'react';
import ReactDOM from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { foodEdit } from './views/foodEdit';
import * as foodItemActionCreators from './actions';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import FoodDrinks from '../foodDrinks';

class AddFoodItem extends Component{
	state={title:'',price:''};
	setTitle=(x)=>{
		var title=x.target.value;
		this.setState({title:title});
	}
	setPrice=(x)=>{
		var price=x.target.value;
		this.setState({price:price});
	}
	render = () => {
		let { saveItem} = this.props;
		return(
			<>
			<div><label>Title:</label>
            <input type="text" id="title" onChange={this.setTitle}/></div>
            <div><label>Price per attendee:</label>
            <input type="text" id="price" onChange={this.setPrice}/></div>
            <input type="button" value="save" id="abc" onClick={ () => {saveItem(this.state.title,this.state.price)} }/>
            <span><Link to="/foodDrinks/"> <input type="button" value="Cancel"/> </Link></span>
			<foodEdit saveItem={saveItem} />
			</>
		)
	}
}
function mapDispatchToProps(dispatch){
	var foodItemActionDispatchers = bindActionCreators(foodItemActionCreators, dispatch);
	return foodItemActionDispatchers;
}

function mapStateToProps({foodItemData}){
	let food = foodItemData;
	return { food : food }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddFoodItem);