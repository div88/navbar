import React, { Component } from 'react';
import nav from '../navigation.json'


class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLink: false,
			activeCity: ''
		}

		this.clickEvent = this.clickEvent.bind(this);
	}

	clickEvent = (el, city) => {
		if(city.label) {
			this.setState({
				activeLink: true,
				activeCity: city.section
			})
		}
		
	}
	
	render() {
		let activeLinkClass = (this.state.activeLink ? 'active-link' : '');
		let selectedCity = (this.state.activeCity ? this.state.activeCity : '');
		
		return (
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
		)
	}
}

export default Navbar;
