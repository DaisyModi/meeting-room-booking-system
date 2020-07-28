import React, { Component } from 'react';
//import * as roomActionCreators from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export const browserHistory = createBrowserHistory();


export default class BookingByUser extends Component{

    state = {date: null, attendees : null, startTime : null, endTime : null};

    handleChange(event){
        //this.setState({value: event.target.value});
        //console.log(event.target.value);
    }

    setDate = (evt) => {
        var date = evt.target.valueAsDate;
        this.setState({ date : date });
        console.log(this.state);
    }
    
    setStartTime = (evt) => {
        var time = evt.target.valueAsDate;
        this.setState({ startTime : time });
        console.log("****",this.state);
    }
    setEndTime = (evt) => {
        var time = evt.target.valueAsDate;
        this.setState({ endTime : time });
        console.log(this.state);
    }
    setAttendees = (evt) => {
        var attendees = evt.target.valueAsNumber;
        this.setState({ attendees : attendees });
        console.log(this.state);
    }

	render = () => {
        let { room } = this.props.location.state;
		return(
			<div className="container-fluid">
                <div className="card" style={{width: 82 + 'em'}}>
                    <h3 class="card-header">Step 2 : Book Room</h3>
                    <div className="card-horizontal">
                        <div className="img-square-wrapper">
                            <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h1 className="card-title">{room.title}</h1>
                            <dl class="row">
                                <dt class="col-sm-2">Capacity :</dt>
                                <dd class="col-sm-10"> {room.capacity} </dd>
                                <dt class="col-sm-2">Date :</dt>
                                <dd class="col-sm-10"> 
                                    <input type="date" onChange={this.setDate}/>
                                </dd>
                                <dt class="col-sm-2">Duration :</dt>
                                <dd class="col-sm-10"> 
                                    <select onChange={this.handleChange}>
                                        <option value="hour">Hour</option>
                                        <option value="half-day-morning">Half Day</option>
                                        <option value="half-day-morning">Full Day</option>
                                    </select>
                                </dd>
                                <dt class="col-sm-2">Start time :</dt>
                                <dd class="col-sm-10"> 
                                    <input type="time" onChange={this.setStartTime}></input>
                                </dd>
                                <dt class="col-sm-2">End time :</dt>
                                <dd class="col-sm-10"> 
                                    <input type="time" onChange={this.setEndTime}></input>
                                </dd>
                                <dt class="col-sm-2">Attendees :</dt>
                                <dd class="col-sm-10"> 
                                    <input type="number" min="0" onChange={this.setAttendees} />
                                </dd>
                            </dl>
                        </div>
                        
                    </div>
                </div>
                
                <div class="tab-content">
                    <Link to="/user-page/"> 
                        <div style={{float : "left"}}>
                            <input type='button' class='btn button-previous' value='Back' />
                        </div>					 
                    </Link>
                    <Link to={{pathname: '/room-setup-by-user/',
                            state: {
                                room : room,
                                booking_details : this.state
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
