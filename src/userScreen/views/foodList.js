import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FoodItemForUsers } from './foodItem';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import * as foodActionCreators from '../../foodDrinks/actions';

export class FoodListForUsers extends Component{
	state = {booking_details : null};

	componentDidMount(){
		this.props.load();
	}

	addFood =(food)=>{
        this.booking_details.foodList.push(food);
	}
	
	render = () => {
		let { food,toggleFood,load } = this.props;
		let { booking_details } = this.props.location.state;
		this.state.booking_details = booking_details;

		//console.log("^^^", booking_details);
		
		let	foodItems = food.map((foodItem, index) => (
				<FoodItemForUsers food={foodItem}  key={index} toggleFood={toggleFood} load={load} addFood={this.addFood} />
			));
		return(
			<>
			<div className="table-responsive">
				<table borderless>
					<thead>
						<th></th>
						<th>Title</th>
						<th>No of people</th>
						<th>Price</th>
					</thead>
					<tbody>
						{foodItems}
					</tbody>
				</table>
			</div>


			<Link to={{pathname: '/room-setup-by-user/',
                                        state: {
											booking_details : this.state.booking_details
										}
                                        }}> 
                        <div style={{float : "left"}}>
                            <input type='button' class='btn button-previous' value='Back' />
                        </div>					 
                    </Link>
                    <Link to={{pathname: '/user-details/',
                            state: {
                                booking_details : this.state.booking_details
                            }
                    }}>
                        <div style={{float : "right"}}>
                            <input type='button' class='btn button-next' value='Next' />
                        </div>					 
                    </Link>

			</>
		)
	}
}
function mapDispatchToProps(dispatch){
	var foodActionDispatchers = bindActionCreators(foodActionCreators, dispatch);
	return foodActionDispatchers;
}

function mapStateToProps({foodData}){
	let food = foodData;
	//console.log(food);
	return { food : food }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FoodListForUsers);