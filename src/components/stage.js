import React from 'react';
import Link from 'gatsby-link';

export default class Stage extends React.Component {
	constructor(props) {
		super(props);
	}

	renderButton() {
		if(this.props.stageprops.buttonTarget != undefined) {
			return (
				<a href={this.props.stageprops.buttonTarget} className="btn btn-primary">{this.props.stageprops.buttonText}</a>
			);
		}
	}

	renderSubheadline() {
		if(this.props.stageprops.subHeadline != undefined) {
			return (
				<p className="lead mb-4">{this.props.stageprops.subHeadline}</p>
			);
		}
	}

	render(data){

		return(
			<div style={{backgroundImage: 'url(' + this.props.stageprops.image + ')'}} id="stage">
				<div className="overlay-text">
					<h2>{this.props.stageprops.headline}</h2>
					{this.renderSubheadline()}
					{this.renderButton()}
				</div>
			</div>
		)
	}
}