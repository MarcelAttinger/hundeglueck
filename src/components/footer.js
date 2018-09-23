import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Link from 'gatsby-link';

const Footer = () => (
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-sm-6 footer-links">
					<Link to="/imprint/">Impressum</Link>
					<Link to="/data-protection/">Datenschutzerklärung</Link>
				</div>
				<div className="col-sm-6">
					<div className="social-media">
						<a href="#" className="fa fa-facebook">F</a>
						<a href="#" className="fa fa-envelope">M</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;