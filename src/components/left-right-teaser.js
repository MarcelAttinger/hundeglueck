import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Link from 'gatsby-link';


export default class LeftRightTeaser extends React.Component {
	constructor(props) {
		super(props);
	}

	renderLink(teaser) {
		if(teaser.linkTarget !== ''){
			return (<Link to={teaser.linkTarget}><span className="fa fa-angle-right">Arrow</span><span>{teaser.linkDesc}</span></Link>)
		}
	}

	render() {
		return (
			<div>
				{this.props.leftRightTeasers.map(teaser => (
					<section key={v4()} className="left-right-teaser">
						<div className="container">
							<div className="row">
								<div className="col-lg-8 image">
									<img src={teaser.image} alt={teaser.imageAlt}/>
								</div>
								<div className="col-lg-4 text">
									<h3>{teaser.headline}</h3>
									<p>{teaser.paragraph}</p>
									{this.renderLink(teaser)}
								</div>
							</div>
						</div>
					</section>
				))}
			</div>
		)
	}
}