import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FoodItem } from './views/foodItem';
import { FoodList } from './views/foodList';
import * as foodActionCreators from './actions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class foodDrinks extends Component{
	state={query:'',data:[]};

	foo=()=>{
		this.props.submit(this.state.query);
	}
	componentDidMount()
	{
		this.props.load();
	}
	render = () => {
		let { food,load,submit,changeFood,deleteSelected,selectItem,toggleFood,Delete } = this.props;	
		return(
			<>
			<span><Link to="/AddFoodItem/"><input type="button" value="Add Item"/> </Link></span>
			<input type="text" placeholder="Search..." onChange={evt=>this.setState({query:evt.target.value})} />
			<button type="submit" value="Submit" onClick={this.foo} ><i class="fa fa-search"></i></button>
				<FoodList {...{food,changeFood,deleteSelected,selectItem,toggleFood,Delete}} />
			</>
		)
	}
}

function mapDispatchToProps(dispatch){
	var foodActionDispatchers = bindActionCreators(foodActionCreators, dispatch);
	return foodActionDispatchers;
}

function mapStateToProps({foodData}){
	let food = foodData
	return { food : food }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(foodDrinks);




