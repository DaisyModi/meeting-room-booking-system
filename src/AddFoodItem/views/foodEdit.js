import React, { Component } from 'react';

export class FoodEdit extends Component{
	state = { title : '', price : ''};
	render = () => {
		let 	{saveItem}=this.props,
		{ title, price } = this.state;
		return(
			<section className="edit">
				<input type="button" value="Save" onClick={ () => saveItem(title,price) }/>
			</section>
		)
	}
}