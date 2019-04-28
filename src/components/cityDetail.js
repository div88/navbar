import React, { Component } from 'react';
import nav from '../navigation.json'
import moment from 'moment';
import 'moment-timezone';

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
