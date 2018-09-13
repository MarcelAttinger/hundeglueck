import React from 'react';
import Link from 'gatsby-link';
import logo from '../img/logo.jpg';

const Header = ({ siteTitle }) => (
  <header>
	  <div className="container">
		  <div className="row">
			  <div className="col">
				  <div id="logo">
					  <img src={logo} alt="Hundeglück Schönbuch Logo"/>
					  <h1 className="h6 navbar-brand">
						  <span>Hundeglück Schönbuch</span>
						  <span>Annik & Klaus Wanner</span>
					  </h1>
				  </div>
			  </div>
			  <div className="col">
				  <nav className="main-navigation">
					<ul>
						<li>
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">Shop</a>
						</li>
						<li>
							<a href="#">Über mich</a>
						</li>
						<li>
							<a href="#">Kontakt</a>
						</li>
					</ul>
				  </nav>
			  </div>
		  </div>
	  </div>
  </header>
)

export default Header
