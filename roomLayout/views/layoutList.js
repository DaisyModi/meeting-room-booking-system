import React, { Component } from 'react';
import { LayoutItem } from './layoutItem';

export class LayoutList extends Component{

	render = () => {
		let { layouts } = this.props;
		let layoutItems = layouts.map((layout, index) => (
				<LayoutItem layout={layout}  key={index} />
			));
			
		return(
			/*** Tabulating the layout data ***/
			<div className="table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">S.No.</th>
							<th scope="col">Image</th>
							<th scope="col">Title</th>
							<th scope="col">Rooms</th>
							<th scope="col"></th>
						</tr>
					</thead>

					<tbody>
						{layoutItems}
					</tbody>

				</table>
			</div>
		)
	}
}