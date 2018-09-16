import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';



export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	// Collapse Navbar
	navbarCollapse() {
		if (window.scrollY > 50) {
			console.log('in');
			document.querySelector("header").classList.add("navbar-shrink");
		} else {
			console.log('out');
			document.querySelector("header").classList.remove("navbar-shrink");
		}
	}

	componentDidMount(){
		window.addEventListener('scroll', this.navbarCollapse);
	}

	render(){

		return(
			<header>
				<div className="container header-bottom">
					<div className="row">
						<div className="col">
							<div className="logo-wrapper">
								<Link to="/">
									<div id="logo">
										<h1 className="h6 navbar-brand">Hundeglück Schönbuch</h1>
										<span>Gesundes rund um den Hund</span>
									</div>
								</Link>
							</div>
							<nav className="main-navigation">
								<ul className="floating">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<a href="#">Shop</a>
									</li>
									<li>
										<Link to="/about">Über mich</Link>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<Link to="/contact/">Kontakt</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		)
	}
}

