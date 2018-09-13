import React from 'react';
import Link from 'gatsby-link';
import picture from '../img/chaya.jpg';

const Stage = () => (
	<div id="stage">
		<div className="stage-wrapper">
			<img src={picture} alt="Chaya"/>
			<div className="overlay-text">
				<h2>Hundherum gesund!</h2>
				<p className="lead">Bei uns kann steht Ihr Hund im Vordergrund! Wir bieten alles, damit sich Ihr treuer Begleiter rundum wohl fühlt</p>
				<a href="#" className="btn btn-primary">Mehr erfahren</a>
			</div>
		</div>
	</div>
);

export default Stage