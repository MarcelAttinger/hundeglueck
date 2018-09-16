import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Stage from '../components/stage';

const BlogPostTemplate = () => {

	return (
		<article className="blogpost">
			<Stage/>
			<section className="section">
				<h1>blogpost</h1>
			</section>
		</article>
	)
};

export default BlogPostTemplate;