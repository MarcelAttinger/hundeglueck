import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const LeftRightTeaser = ({leftRightTeasers}) => (
	<div>
		{leftRightTeasers.map(teaser => (
			<section key={v4()} className="left-right-teaser">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 image">
							<img src={teaser.image} alt={teaser.imageAlt}/>
						</div>
						<div className="col-lg-4 text">
							<h3>{teaser.headline}</h3>
							<p>{teaser.paragraph}</p>
						</div>
					</div>
				</div>
			</section>
		))}
	</div>
);

LeftRightTeaser.propTypes = {
	teasers: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.string,
			imageAlt: PropTypes.string,
			headline: PropTypes.string,
			paragraph: PropTypes.string
		})
	)
};

export default LeftRightTeaser;