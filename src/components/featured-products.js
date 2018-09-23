import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';

const FeaturedProducts = ({featuredProducts}) => (
	<div>
		<section className="featured-products">
			<div className="container">
				<div className="row">
					{featuredProducts.map(product => (
					<div key={v4()} className="col-4 product">
						<a href="#">
							<img src={product.image} alt="test" />
							<span className="text-overlay">
								<span>
									{product.headline}
								</span>
							</span>
						</a>
					</div>
					))}
				</div>
			</div>
		</section>
	</div>
);

export default FeaturedProducts;