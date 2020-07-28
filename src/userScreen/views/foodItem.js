import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class FoodItemForUsers extends Component{
      
	render = () => {
        let { food,addFood } = this.props;
		return(
            <>
            <tr>
            <td><input type="checkbox" onChange={()=>{addFood(food)}} /></td>
            <td>{food.title}</td>
            <td><input type="text" id="people" onChange={evt=>this.setState({noOfPeople:evt.target.value})}/></td>
            <td>{food.price}</td>
            </tr>
            </>
		)
	}
}