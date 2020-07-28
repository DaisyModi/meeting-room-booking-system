import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class RoomItemForUsers extends Component{
	render = () => {
        let { room } = this.props;

		return(
                <tr>
                    <td>
                    <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 mt-3">
                            <div className="card" style={{width: 82 + 'em'}}>
                                <div className="card-horizontal">
                                    <div className="img-square-wrapper">
                                        <img className="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="card-title">{room.title}</h3>

                                        <dl class="row">
                                            <dt class="col-sm-2">Capacity : </dt>
                                            <dd class="col-sm-10">{room.capacity} people</dd>
                                            
                                            <dt class="col-sm-2">Description : </dt>
                                            <dd class="col-sm-10">{room.description}</dd>
                                        </dl>
                                    </div>
                                </div>
                            
                                <span> 
                                    <Link to={{pathname: '/user-booking-room/',
                                            state: {
                                                room : room
                                            }
                                    }}>
                                        <button type="btn btn-primary">
                                            Book this Room
                                        </button>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    </div>
                </td>
			</tr>
		)
	}
}