import React, { Component } from 'react';
import * as bookingActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {EquipmentListItem} from './equipmentList'

class BookingAdd extends Component{
	
	state = { roomName : '', start_date:'',end_date:'', subTotal : '', status:'Pending', attendees:'', paymentMethod:'Cash', layoutName:'', totalEquipmentsPrice:0, amountEquipment:[],
		client:{name:'jatin', title:'Mr.',  email:'', phone:'', notes:'', company:'', address:'', city:'', state:'', zip:'', country:''}
	};

	saveBooking = () => {
		this.props.addBooking(this.state.roomName, this.state.start_date, this.state.end_date, this.state.subTotal, this.state.status,
			this.state.attendees, this.state.paymentMethod, this.state.layoutName, this.state.client);
		window.location.replace("http://localhost:3000/");
	}

	calculateTotalEquipmentPrice=()=>{
		this.state.totalEquipmentsPrice = this.state.amountEquipment.reduce(function (accumulator, item) {
			return accumulator + item;
		  }, 0);
		 
		this.state.subTotal=this.state.totalEquipmentsPrice;
	}

    onEquipmentChange = (index, amount) => {
		this.state.amountEquipment[index] = amount;
	}


	// CLIENT DETAILS HANDLER FUNCTIONS
	handleClientTitle=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				title: newValue       
			}
		}))
		console.log("title ", this.state.client);
	}
	handleClientname=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				name: newValue       
			}
		}))
	}
	handleClientEmail=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				email: newValue       
			}
		}))
	}
	handleClientPhone=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				phone: newValue       
			}
		}))
	}
	handleClientNotes=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				notes: newValue       
			}
		}))
	}
	handleClientCompany=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				company: newValue       
			}
		}))
	}
	handleClientAddress=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				address: newValue       
			}
		}))
	}
	handleClientCity=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				city: newValue       
			}
		}))
	}
	handleClientState=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				state: newValue       
			}
		}))
	}
	handleClientZip=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				zip: newValue       
			}
		}))
	}
	handleClientCountry=(evt)=>{
		let newValue=evt.target.value;
		this.setState(prevState => ({
			client: {                   
				...prevState.client,  
				country: newValue       
			}
		}))
	}

	

	
	
	render = () => {
		let {roomNames, layoutNames, equipments} = this.props.location.state;
		let {status,paymentMethod } = this.state;

		let roomsList = roomNames.map((room, index) => (
			<option key={index}>{room}</option> 
		));

		let layoutsList = layoutNames.map((layout, index) => (
			<option key={index}>{layout}</option> 
		));

		let equipmentListItems = equipments.map((equipment, index) => (
			<EquipmentListItem equipment={equipment}  key={index} onEquipmentChange={this.onEquipmentChange} index={index}/>
		));
		
		return(
			
			<section >

				<p>
				<label className="title"  htmlFor="">Room Name </label>
				<select  className="selectpicker"   onChange = { evt => this.setState({roomName : evt.target.value})}  >
					{roomsList}
				</select>
				<br/>
				</p>
				

				<p>
				<label  className="title" htmlFor="">Layout </label>
				<select  className="selectpicker"  onChange = { evt => this.setState({layoutName : evt.target.value})}  >
					{layoutsList}
				</select>
				<br/>
				</p>

				<p>
				<label className="title" htmlFor="">Attendees </label>
				<input type="number" onChange = { evt => this.setState({attendees : evt.target.value})} />
				<br/>
				</p>

				<p>
				
				<label className="title" htmlFor="">Payment Method </label>
				<span >
					<select value={paymentMethod} className="selectpicker" onChange = { evt => this.setState({paymentMethod : evt.target.value})}   >
						<option>Authorize.net</option>
						<option>Wire Transfer</option>
						<option>Cash</option>
						<option>Credit Card</option>
						<option>PayPal</option>
					</select>
				</span>
				<br/>
				</p>


				<p>
				<label className="title" htmlFor="">Start Date </label>
				<input  type="date" onChange = { evt => this.setState({start_date : evt.target.value})} />
				<br/>
				</p>

				<p>
				<label className="title" htmlFor="">End Date </label>
				<input  type="date" onChange = { evt => this.setState({end_date : evt.target.value})} />
				<br/>
				</p>
				

				<p>
				<label className="title" htmlFor="">Status</label>
				{
					status === "Confirmed"?
					(
							
							<span className="confirmed">
								<select value={status} className="selectpicker" onChange = { evt => this.setState({status : evt.target.value})}   >
									<option>Confirmed</option>
									<option>Pending</option>
									<option>Cancelled</option>
								</select>
							</span>
						
					) :
					(
						
						status === "Cancelled" ? 
						( 
							
								<span className="cancelled">
									<select value={status} className="selectpicker" onChange = { evt => this.setState({status : evt.target.value})}   >
										<option>Confirmed</option>
										<option>Pending</option>
										<option>Cancelled</option>
									</select>
								</span>
							
						)	:
						(
							
								<span className="pending">
									<select value={status} className="selectpicker" onChange = { evt => this.setState({status : evt.target.value})}  >
										<option>Confirmed</option>
										<option>Pending</option>
										<option>Cancelled</option>
									</select>
								</span>
							
						)		

					)
				}
				</p>
				<br/><br/><br/><br/><br/>
{/* <--------------------------Equipments Details---------------------------------------------------------------------------------------------------------------> */}
				<fieldset className="fieldset white">
					<legend> Equipments</legend>

					<div className="table-responsive">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Units</th>
									<th scope="col">Price per unit</th>
									<th scope="col"></th>
								</tr>
							</thead>

							<tbody>
								{equipmentListItems}
							</tbody>

						</table>
					</div>
					<div className="overflow">
						<input type="button" value="Save Equipment's Choices" onClick={ this.calculateTotalEquipmentPrice }/>				
					</div>
				</fieldset>
				<br/><br/><br/><br/><br/>



{/* <----------------------------Client Details------------------------------------------------------------------------------------------------------> */}

				<fieldset className="fieldset white">
					<legend> Client Details</legend>


					<p>
					<label className="title" htmlFor="">Title </label>
					<span >
						<select value={this.state.client.title} className="selectpicker" onChange = { this.handleClientTitle}   >
							<option>Dr.</option>
							<option>Miss</option>
							<option>Mr.</option>
							<option>Mrs.</option>
							<option>Ms.</option>
							<option>Other</option>
							<option>Prof.</option>
							<option>Rev.</option>
						</select>
					</span>
					<br/>
					</p>
					
					<p>
					<label className="title" htmlFor="">Name </label>
					<input type="text" onChange = {this.handleClientName} />
					<br/>
					</p>

					<p>
					<label className="title" htmlFor="">Email</label>
					<input type="text" onChange = { this.handleClientEmail} />
					<br/>
					</p>


					<p>
					<label className="title"  htmlFor="">Phone</label>
					<input type="text" onChange = { this.handleClientPhone }/>
					<br/>
					</p>


					<p>
					<label className="title" htmlFor="">Notes</label>
					<input type="text" onChange = { this.handleClientNotes} />
					<br/>
					</p>


					<p>
					<label className="title"  htmlFor="">Company</label>
					<input type="text" onChange = {this.handleClientCompany } />
					<br/>
					</p>


					<p>
					<label className="title"  htmlFor="">Address</label>
					<input type="text" onChange = { this.handleClientAddress} />
					<br/>
					</p>

					<p>
					<label className="title" htmlFor="">City</label>
					<input type="text" onChange = {this.handleClientCity} />
					<br/>
					</p>


					<p>	
					<label className="title" htmlFor="">State</label>
					<input type="text" onChange = { this.handleClientState} />
					<br/>
					</p>

					<p>
					<label className="title"  htmlFor="">Zip</label>
					<input type="text" onChange = {this.handleClientZip} />
					<br/>
					</p>

					
					<label className="title" htmlFor="">Country</label>
					<input type="text" onChange = { this.handleClientCountry} />
					<br/>
					
				</fieldset>
				<br/><br/><br/><br/><br/>
{/* <-----------------------------------------------------------------------------------------------------------------------------------------------> */}






				<input type="button"  value="Save Room Data" onClick={this.saveBooking } />
			</section>
			
		)
	}
}

function mapDispatchToProps(dispatch){
	var bookingActionDispatchers = bindActionCreators(bookingActionCreators, dispatch);
	return bookingActionDispatchers;
}



export default connect(
	null,
	mapDispatchToProps
)(BookingAdd);