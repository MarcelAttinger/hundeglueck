import React from 'react';
import Map from '../components/map-section';

const ContactTemplate = () => {

	return (
		<div className="contact">
			<Map />
			<section className="section">
				<div className="container text-center mb-4 mt-4">
					<h1>Kontakt</h1>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorem earum et
							   iure maxime nam nesciunt nulla, quas temporibus totam. Ab aliquam aspernatur assumenda
							   aut autem corporis deserunt dolorem doloribus eos est ex expedita harum hic in itaque
							   laboriosam, laborum molestias nam natus quaerat quam quis quo sit vel voluptatibus? A
							   accusantium animi cumque distinctio, dolores earum, illo magni molestiae nesciunt
							   obcaecati provident quasi repudiandae tenetur. Consectetur consequuntur et maxime
							   mollitia perspiciatis quae.</p>
							<ul>
								<li>
									<span className="phone">
										<strong>Rufen Sie uns an!</strong>
										01573 6174643
									</span>
								</li>
								<li>
									<span className="location">
										<strong>Unser Standort</strong>
										Birkenstraße 2, 71155 Altdorf
									</span>
								</li>
								<li>
									<span className="email">
										<strong>Schreiben Sie uns an!</strong>
										<a href="mailto:hi@meineEmail.de">hi@meineEmail.de</a>
									</span>
								</li>
							</ul>
						</div>
						<div className="col-md-6">
							<form action="#">
								<div className="form-group">
									<input type="text" id="name" className="form-control" placeholder="Name" />
									<label htmlFor="name">Name</label>
								</div>
								<div className="form-group">
									<input type="email" id="email" className="form-control" placeholder="E-Mail" />
									<label htmlFor="email">E-Mail</label>
								</div>
								<div className="form-group">
									<textarea rows="6" id="textarea" className="form-control" placeholder="Ihre Nachricht" />
									<label htmlFor="textarea">Ihre Nachricht</label>
								</div>
								<button type="submit" className="btn btn-secondary">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

export default ContactTemplate;