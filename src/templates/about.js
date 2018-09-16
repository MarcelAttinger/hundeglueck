import React from 'react';
import Stage from '../components/stage';

const AboutTemplate = () => {

	return (
		<section className="about">
			<Stage/>
			<div className="container text-center mb-4 mt-4">
				<div className="col-lg-8 ml-auto mr-auto">
					<h2>Über uns</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad at consequuntur, cum cumque
					   cupiditate dicta distinctio eaque esse eveniet, id impedit iure iusto magni maiores modi natus
					   odit officia praesentium quia rerum sint sit, suscipit ullam vel vitae voluptate? At eveniet
					   explicabo hic necessitatibus nobis officiis quis quos totam.</p>
				</div>
			</div>
		</section>
	)
};

export default AboutTemplate;