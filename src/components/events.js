import React from 'react';
import {v4} from 'uuid';
import Link from 'gatsby-link';

export default class Events extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<section className="events container">
				<h2>Bevorstehende Events</h2>
				<div className="row">
					{this.props.events.map(teaser => (
						<div key={v4()} className="col-4 event-teaser">
							<div className="img">
								<img src={teaser.image} alt={teaser.imageAlt} />
							</div>
							<div className="text">
								<span className="date">{teaser.startDate} - {teaser.endDate}</span>
								<h3>Weihnachtsbaumverkauf</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque error fugiat
								   iusto placeat porro quas, qui recusandae sit sunt voluptas.</p>
								<Link to="/blog-overview/"><span className="fa fa-angle-right">Arrow</span><span>Mehr lesen</span></Link>
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}