import React, { Component } from 'react';
import { LayoutItem } from './layoutItem';

export class LayoutList extends Component{

	render = () => {
		let { layouts } = this.props;
		let layoutItems = layouts.map((layout, index) => (
				<LayoutItem layout={layout}  key={index} />
			));
			
		return(
			<section className="list">
				<ol>
					{ layoutItems }
				</ol>
				
				{/* <input type="button" value="Remove Closed" onClick={() => removeClosed()}/> */}
			</section>
		)
	}
}