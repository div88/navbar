import React, { Component } from 'react';

class CityDetail extends Component {
	render() {
		let timeI = this.props ? this.props.timeI : ''; 
		let city = this.props ? this.props.city.label : ''; 
		
		return (
			<div className="content">
				<div>Time in {city} now is: {timeI}</div>
			</div>
		)
	}
}

export default CityDetail;
