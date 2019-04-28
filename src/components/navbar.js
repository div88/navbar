import React, { Component } from 'react';
import nav from '../navigation.json'
import moment from 'moment';
import 'moment-timezone';
import axios from 'axios';
import CityDetail from './cityDetail.js'


// AIzaSyBUTZmWsF6PAlIgjYY_Xgz1t9EJEbHPHLY
// AIzaSyBhrchFPXDF9-OWWA-igwUnwWLc4MZKTo4
// AIzaSyDgddaqUTaWu-SB9qKoLxt0Mk0cx7IC9n8

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLink: false,
			activeCity: '',
			timeI: '',
			cityName: ''
		}

		this.clickEvent = this.clickEvent.bind(this);
		this.getTime = this.getTime.bind(this);
	}

	getTime = (city) => {
		// const apiK = 'AIzaSyCP_zM2YDc8JgOkXCAf9qwbeGvMl00064k';
		// let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city.label}&key=${apiK}`;
		// let lat;
		// let long;
		if(city) {
		 	this.setState({
		 		timeI: moment.tz(`${city.timeZ}`).format('HH:mm:ss'),
		 		cityName: city
		 	})
		 // 	axios.get(url).then(response => {
	 	// 		lat = response ? response.data.results[0].geometry.location.lat : '';
		 // 		long = response ? response.data.results[0].geometry.location.lat : '';
			//     console.log(lat);	
		 		
			//    console.log(response.data.results[0].geometry);
			// });

		}

	}

	clickEvent = (el, city) => {
		let cityTime = this.getTime(city);
		
		if(city.label) {
			this.setState({
				activeLink: true,
				activeCity: city.section,
				show: true
			})
		}	
	}
	
	render() {
		let activeLinkClass = (this.state.activeLink ? 'active-link' : '');
		let selectedCity = (this.state.activeCity ? this.state.activeCity : '');
		
		return (
			<div>
				<div className="navBar">
					<ul id="navList">
					{nav.cities.map((city, index) => (
						<li key={city.section} className={city.section === selectedCity ? activeLinkClass : ''}>
							<a href="#" onClick={() => this.clickEvent(this,city)}>{city.label}</a>
							<div className="underline"></div>
						</li>
					))}
					</ul>

					
				</div>
				{this.state.timeI ? <CityDetail timeI={this.state.timeI} city={this.state.cityName}></CityDetail> : ''}
			</div>
		)
	}
}

export default Navbar;
