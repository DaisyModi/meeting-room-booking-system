import React, { Component } from 'react';

export class LayoutEdit extends Component{
	state = { newLayoutTitle : '', rooms : []};
	render = () => {
		let { addNew } = this.props,
			{ newLayoutTitle, rooms} = this.state;
		return(
			<section classtitle="edit">
				<label htmlFor="">Layout Title :</label>
				<input type="text" onChange = { evt => this.setState({newLayoutTitle : evt.target.value})} />
				<br/>
				{/* <label htmlFor="">Capacity :</label>
				<input type="text" onChange = { evt => this.setState({capacity : evt.target.value})} />
				<br/> */}
				{/* <label htmlFor="">Bookings :</label>
				<input type="text" onChange = { evt => this.setState({bookings : evt.target.value})} />
				<br/> */}
				<input type="button" value="Add New" onClick={ () => addNew(newLayoutTitle) }/>
			</section>
		)
	}
}