import React, { Component } from 'react';
import nav from '../navigation.json'
import moment from 'moment';
import 'moment-timezone';
import CityDetail from './cityDetail.js'

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
		if(city) {
		 	this.setState({
		 		timeI: moment.tz(`${city.timeZ}`).format('HH:mm:ss'),
		 		cityName: city
		 	})
		}
	}

	addSlidingIndicator(e) {
		const el = e.target;
		const target = document.querySelector(".underline");
	  	const links = document.querySelectorAll(".navBar a");

		if (!el.parentNode.classList.contains("active-link")) {
	      for (let i = 0; i < links.length; i++) {
	        if (links[i].parentNode.classList.contains("active-link")) {
	          links[i].parentNode.classList.remove("active-link");
	        }
	      }

	      el.parentNode.classList.add("active-link");

	      const width = el.getBoundingClientRect().width;
	      const height = el.getBoundingClientRect().height;
	      const left = el.getBoundingClientRect().left + window.pageXOffset;
	      const top = el.getBoundingClientRect().top + window.pageYOffset;

	      target.style.width = `${width}px`;
	      target.style.height = `${height}px`;
	      target.style.left = `${left}px`;
	      target.style.top = `${top}px`;
	      target.style.borderColor = '#000';
	      target.style.transform = "none";
	    }
	}


	clickEvent = (el, city) => {
		if(city.label) {
			this.setState({
				activeLink: true,
				activeCity: city.section,
				show: true
			})
			this.getTime(city);
		}	
		this.addSlidingIndicator(el);
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
							<a href="#" onClick={(e) => this.clickEvent(e,city)}>{city.label}</a>
						</li>
					))}
					</ul>

					<span className="underline"></span>

					
				</div>
				{this.state.timeI ? <CityDetail timeI={this.state.timeI} city={this.state.cityName}></CityDetail> : ''}
			</div>
		)
	}
}

export default Navbar;
