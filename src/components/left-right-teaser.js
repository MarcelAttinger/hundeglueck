import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const LeftRightTeaser = ({leftRightTeasers}) => (
	<section>
		<div className="container">
			{leftRightTeasers.map(teaser => (
				<div key={v4()} className={`row left-right-teaser ${teaser.imagePosition}`}>
					<div className="col-8 image">
						<img src={teaser.image} alt={teaser.imageAlt} />
					</div>
					<div className="col-4 text">
						<h3>{teaser.headline}</h3>
						<p>{teaser.paragraph}</p>
					</div>
				</div>
			))}
		</div>
	</section>
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