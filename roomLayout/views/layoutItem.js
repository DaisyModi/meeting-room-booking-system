import React, { Component } from 'react';

export class LayoutItem extends Component{
	render = () => {
		let { layout /*toggle, selection*/ } = this.props;
		return(
			<tr>		
				<td>{layout.id}</td>
				<td>{}</td>
				<td>{layout.title}</td>
				<td>
					<p>Panoramic Room</p>
					<p>Small Conference Room</p>
					<p>Large Conference Room</p>
				</td>
				<td>{}</td>
			</tr>
		)
	}
}