import React from 'react';
import Link from 'gatsby-link';
import stageImage from '../img/ueber-uns.jpg';

const Stage = ({stageprops}) => (
	<div style={{backgroundImage: 'url(' + stageprops.image + ')'}} id="stage">
		<div style={{display: 'none'}}><img src={stageImage} alt="est"/></div>
		<div className="overlay-text">
			<h2>{stageprops.headline}</h2>
			<p className="lead mb-4">{stageprops.subHeadline}</p>
			<a href={stageprops.buttonHref} className="btn btn-primary">{stageprops.buttonText}</a>
		</div>
	</div>
);

export default Stage