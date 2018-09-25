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
			document.querySelector("header").classList.add("navbar-shrink");
		} else {
			document.querySelector("header").classList.remove("navbar-shrink");
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.navbarCollapse);

		if (location.pathname === '/' || location.pathname === '/about') {
			document.querySelector("header").classList.add('home');
		}
	}

	componentDidUpdate(){
		if (location.pathname === '/' || location.pathname === '/about') {
			document.querySelector("header").classList.add('home');
		}else{
			document.querySelector("header").classList.remove('home');
		}
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
										<span>Hundherum gesund</span>
									</div>
								</Link>
							</div>
							<nav className="main-navigation">
								<ul className="floating">
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">Über uns</Link>
									</li>
									<li>
										<Link to="/blog-overview">Blog</Link>
									</li>
									<li>
										<a target="_blank" href="https://www.anifit.de/content/index_ger.html">Shop</a>
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

