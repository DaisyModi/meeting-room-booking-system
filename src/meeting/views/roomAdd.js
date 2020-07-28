import React, { Component } from 'react';
import * as roomActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { thisTypeAnnotation } from '@babel/types';
import {LayoutListItem} from './layoutList'



let layouts=[];

class RoomAdd extends Component{
	
	state = { title : '', capacity : '', description : '', active: true, selectedLayouts:[], finalLayouts:[] };
	saveDetails = () => {
		this.props.addNew(this.state.newRoomName, this.state.capacity, this.state.bookings);
		window.location.replace("http://localhost:3000/");
	}

	handleStatus=(evt)=>{
		let currStatus = evt.target.value;
		if(currStatus  === 'Active')
			this.setState({active:true});
		else
			this.setState({active:false});

	}

	saveLayoutChoices=()=>{
		console.log("selected layouts", this.state.selectedLayouts );
		let finalLayouts = this.state.selectedLayouts.filter(layout => layout.isSelected === false);
		this.setState({finalLayouts:finalLayouts});
	}
	onLayoutSelection=(index, updatedLayout)=>{
		this.state.selectedLayouts[index] = updatedLayout;
	}

	render = () => {
		let {layouts}= this.props.location.state;
		let layoutListItems = layouts.map((layout, index) => (
			<LayoutListItem layout={layout}  onLayoutSelection={this.onLayoutSelection} key={index} index={index} />
		));

		return(

			<section >
				<p>
				<label className="title" >Title </label>
				<input type="text" onChange = { evt => this.setState({title : evt.target.value})} />
				<br/>
				</p>

				<p>
				<label className="title" >Capacity </label>
				<input type="number" onChange = { evt => this.setState({capacity : evt.target.value})} />
				<br/>
				</p>

				<p>
				<label className="title" >Description </label>
				<input type="text" onChange = { evt => this.setState({description : evt.target.value})} />
				<br/>
				</p>

				<p>
				<label className="title" > Status </label>
				{
					this.state.active === true ?
					(
						<span >
							<select value="Active" className="selectpicker" onChange = { this.handleStatus}   >
								<option>Active</option>
								<option>Inactive</option>
							</select>
						</span>
					):
					(
						<span >
							<select value="Inactive" className="selectpicker" onChange = {this.handleStatus}   >
								<option>Active</option>
								<option>Inactive</option>
							</select>
						</span>
					)
				}
				</p>

	
				
				
				<fieldset className="fieldset white">
					<legend> Layouts</legend>

					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Select</th>
								</tr>
							</thead>

							<tbody>
								{layoutListItems}
							</tbody>

						</table>
					</div>
					<div className="overflow">
						<input type="button" value="Save Layout's Choices" onClick={ this.saveLayoutChoices }/>				
					</div>
				</fieldset>
				<br/><br/><br/><br/><br/>




			</section>
		
			//  		<div className="form-group"> 
			//  			<div className="col-sm-offset-2 col-sm-12">
			//  			<button type="submit" className="btn btn-default" onClick={this.saveDetails }>Submit</button>
			//  			</div>
			//  		</div>
			//  	</form>
			// </div>

		)
	}
}

function mapDispatchToProps(dispatch){
	console.log("dispatch");
	var roomActionDispatchers = bindActionCreators(roomActionCreators, dispatch);
	return roomActionDispatchers;
}

export default connect(
	null,
	mapDispatchToProps
)(RoomAdd);