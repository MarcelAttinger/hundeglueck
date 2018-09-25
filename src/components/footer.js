import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Link from 'gatsby-link';

const Footer = () => (
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-sm-3 footer-links">
					<h3>Kontakt</h3>
					<table>
						<tbody>
							<tr>
								<td>
									<span>Adresse: </span>
								</td>
								<td>
									<a href="https://goo.gl/maps/np9Lxe6FxhG2">Birkenstraße 2, <br /> 71155 Altdorf</a>
								</td>
							</tr>
							<tr>
								<td>
									<span>Telefon:</span>
								</td>
								<td>
									<a href="#">01573 6174643</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="col-sm-3 footer-links">
					<h3>Informationen</h3>
					<Link to="/imprint/">Impressum</Link>
					<Link to="/data-protection/">Datenschutzerklärung</Link>
				</div>
				<div className="col-sm-6">
					<div className="social-media">
						<h3>Social Media</h3>
						<div>
							<a href="#" className="facebook">F</a>
							<a href="#" className="fa fa-envelope">M</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;