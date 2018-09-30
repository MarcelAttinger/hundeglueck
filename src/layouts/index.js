import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import '../stylesheets/main.scss';

const Layout = ({children, data, location}) => (
	<div>
		<Helmet>
			<meta name="robots" content="index, follow"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
			<meta name="description" content="Freelance Web Developer Marcel Attinger"/>
			<meta name="author" content="Marcel Attinger"/>
			<title>Hundeglück Schönbuch</title>
			<html lang="de" />
		</Helmet>
		<Header siteTitle={data.site.siteMetadata.title}/>
		<div>{children()}</div>
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
