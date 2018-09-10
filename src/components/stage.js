import React from 'react';
import Link from 'gatsby-link';
import picture from '../img/jax.jpg';

const Stage = () => (
	<section id="stage" className="container">
		<div className="stage-wrapper">
			<img src={picture} alt="Chaya"/>
			<div className="overlay-text">
				<h2>Hundherum gesund!</h2>
			</div>
		</div>
	</section>
);

export default Stage