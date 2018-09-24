import React from 'react';
import {v4} from 'uuid';

export default class Stage extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	renderLink(product) {
		if (product.blank) {
			return (
				<a target="_blank" href={product.linkTarget}>
					<img src={product.image} alt="test"/>
					<span className="text-overlay">
						<span>
							{product.headline}
						</span>
					</span>
				</a>
			)
		}else{
			return (
				<a href={product.linkTarget}>
					<img src={product.image} alt="test"/>
					<span className="text-overlay">
						<span>
							{product.headline}
						</span>
					</span>
				</a>
			)
		}
	}

	render() {
		return (
			<div>
				<section className="featured-products">
					<div className="container">
						<div className="row">
							{this.props.featuredProducts.map(product => (
								<div key={v4()} className="col-4 product">
									{this.renderLink(product)}
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
		)
	}
}