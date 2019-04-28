import React, { Component } from 'react';
import nav from '../navigation.json'
import moment from 'moment';
import 'moment-timezone';
import axios from 'axios';


// AIzaSyBUTZmWsF6PAlIgjYY_Xgz1t9EJEbHPHLY
// AIzaSyBhrchFPXDF9-OWWA-igwUnwWLc4MZKTo4
// AIzaSyDgddaqUTaWu-SB9qKoLxt0Mk0cx7IC9n8

class CityDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let timeI = this.props ? this.props.timeI : ''; 
		let city = this.props ? this.props.city.label : ''; 
		
		console.log(city);
		return (
			<div className="content">
				<div>Time in {city} now is: {timeI}</div>
			</div>
		)
	}
}

export default CityDetail;
