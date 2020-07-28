import React, { Component } from 'react';
//import * as roomActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as EquipmentActionCreators from '../../equipments/actions';
import { EquipmentList } from './equipmentList';
export const browserHistory = createBrowserHistory();

function timeToDisplay(time){
    var indiaTime = new Date(time);
    indiaTime.setHours(indiaTime.getHours() - 5); 
    indiaTime.setMinutes(indiaTime.getMinutes() - 30); 
    time = indiaTime.toLocaleString().split(", ");
    return time[1];
}

export class RoomSetupByUser extends Component{
    
    componentDidMount(){
        this.props.loadEquipment();
    }
    state = {booking_details : {}, room : null};

    addLayoutToBooking = (evt) => {
        //console.log("^^^^^^^^");
        var layout = evt.target.value;
        this.booking_details.layout = layout;
    }

    setDate = (evt) => {
        var date = evt.target.valueAsDate;
        this.setState({ date : date });
    }

    setAttendess = (evt) => {
        var data = evt.target.valueAsNumber;
        this.setState({ attendees : data });
    }

    addEquipments =(equip)=>{
        this.booking_details.equipList.push(equip);
    }
	render = () => {
        let { equipments } = this.props;
        console.log(this.state.equipList);
        let	equipItems = equipments.map((equipItem, index) => (
            <EquipmentList equipments={equipItem}  key={index} addEquipments={this.addEquipments}/>
        ));
        console.log(this.state.equipList);
        let { room, booking_details } = this.props.location.state;
        this.state.booking_details = booking_details;
        this.state.booking_details.name = room.title;
        this.state.room = room;

        var startTimeDisplay = timeToDisplay(booking_details.startTime);
        var endTimeDisplay = timeToDisplay(booking_details.endTime);
        
        var date = booking_details.date;
        date = (("0"+date.getDate()).slice(-2)) +"/"+ (("0"+(date.getMonth()+1)).slice(-2)) +"/"+ (date.getFullYear())
        
        let layoutsList = room.layouts.map((layout, index) => (
			<option key={index}>{layout.title}</option> 
        ));
		return(
			<div className="container-fluid">
                <div className="card" style={{width: 82 + 'em'}}>
                    <h3 class="card-header">Step 3 : Room Setup</h3>
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                        </div>

                        <dl class="row">
                                <dt class="col-sm-2">Date of Booking :</dt>
                                <dd class="col-sm-10"> {date} </dd>
                                {/* <dt class="col-sm-2">Price of Booking :</dt>
                                <dd class="col-sm-10"> {} </dd>  */}
                                <dt class="col-sm-2">Start Time :</dt>
                                <dd class="col-sm-10"> {startTimeDisplay} </dd>
                                <dt class="col-sm-2">End Time :</dt>
                                <dd class="col-sm-10"> {endTimeDisplay} </dd>
                                <dt class="col-sm-2">Attendees :</dt>
                                <dd class="col-sm-10"> {this.state.booking_details.attendees} </dd>
                                <dt class="col-sm-2">Layout :</dt>
                                <dd class="col-sm-10"> 
                                    <select  className="selectpicker"  onChange = {this.addLayoutToBooking}  >
					                    {layoutsList}
                                    </select>
                                </dd>
                                <dt class="col-sm-2">Equipment :</dt>
                                <dd class="col-sm-10"> 
                                    <table>
                                    <thead>
                                        <th scope="col"></th>
                                        <th scope="col">title</th>
                                        <th scope="col">price</th>
                                    </thead>
                                    <tbody>
                                        {equipItems}
                                    </tbody>
                                    </table>
                                </dd>
                            
                            </dl> 
                    </div>
                </div>
                <div class="tab-content">
                <Link to={{pathname: '/user-booking-room/',
                                                state: {
                                                    booking_details : this.state.booking_details
                                                }
                                        }}> 
                        <div style={{float : "left"}}>
                            <input type='button' class='btn button-previous' value='Back' />
                        </div>					 
                    </Link>
                    <Link to={{pathname: '/food-list-by-user/',
                            state: {
                                food:this.props.food,
                                booking_details : this.state.booking_details
                            }
                    }}>
                        <div style={{float : "right"}}>
                            <input type='button' class='btn button-next' value='Next' />
                        </div>					 
                    </Link>
                </div>
            </div>          
		)
	}
}

function mapDispatchToProps(dispatch){
	var roomActionDispatchers = bindActionCreators(EquipmentActionCreators, dispatch);
	return roomActionDispatchers;
}

function mapStateToProps({equipmentData}){
	let equipments = equipmentData;
	return { equipments : equipments }; 
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomSetupByUser);