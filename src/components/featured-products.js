import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import product1 from '../img/products/dog1.jpg';
import product2 from '../img/products/dog2.jpg';

const FeaturedProducts = ({featuredProducts}) => (
	<div>
		<section className="featured-products">
			<div className="container">
				<div className="row">
					<div className="col-4 product">
						<a href="#">
							<img src={product1} alt="test" />
							<span className="text-overlay">
								<span>
									Anifit Produkte
								</span>
							</span>
						</a>
					</div>
					<div className="col-4 product">
						<a href="#">
							<img src={product2} alt="test" />
							<span className="text-overlay">
								<span>
									Unser Blog
								</span>
							</span>
						</a>
					</div>
					<div className="col-4 product">
						<a href="#">
							<img src={product2} alt="test" />
							<span className="text-overlay">
								<span>
									Hundephysiotherapie
								</span>
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	</div>
);

export default FeaturedProducts;