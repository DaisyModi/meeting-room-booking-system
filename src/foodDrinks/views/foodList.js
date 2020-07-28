import React, { Component } from 'react';
import  {FoodItem}  from './foodItem';

export class FoodList extends Component{

	render = () => {
		let { food,changeFood,deleteSelected,selectItem,toggleFood,Delete } = this.props,
			foodItems = food.map((food, index) => (
				<FoodItem food={food}  key={index} changeFood={changeFood} selectItem={selectItem} toggleFood={toggleFood} Delete={Delete} />
			));
		return(
			<section className="list">
				<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
						<th></th>
						<th scope="col">Title</th>
						<th scope="col">Price</th>
						</tr>
					</thead>
					<tbody>
					{foodItems}
					</tbody>
				</table>
				</div>
				<input type="button" value="DeleteSelected" onClick={()=>deleteSelected()}/>
			</section>
		)
	}
}