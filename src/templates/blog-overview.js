import React from 'react';
import Link from 'gatsby-link';
import blogpic from "../img/blog-1.jpg";
import Masonry from 'react-masonry-component';

class BlogOverview extends React.Component {
	render() {
		const {data} = this.props;
		//Overview Site Data
		const {edges: overViewdata} = data.blogOverview;
		//Blog Posts Data
		const {edges: posts} = data.blogPost;

		const childElements = posts.map(({node}) => {
			return (
				<div className="col-lg-4 col-md-6 teaser" key={node.fields.slug}>
					<Link to={node.fields.slug}>
						<img src={node.frontmatter.previewImage} alt="test"/>
						<span className="text-overlay">
							<h3>{node.frontmatter.title}</h3>
						</span>
					</Link>
				</div>
			)
		});

		return (
			<div className="blog-overview">
				<div className="article-header">
					<figure>
						<img src={blogpic} alt="Blogpic"/>
					</figure>
					<div className="container">
						<div className="row">
							<div className="col article-header-content">
								<div id="breadcrumb">
									<Link to="/">
										Home
									</Link>
									<span> > </span>
									<span>Blog</span>
								</div>
								<div className="text">
									<h1>Entdecken Sie meinen Blog</h1>
									<p>
										In meiner langjährigen Erfahrung als Hundehalterin und Trainerin habe ich selbst
										viel im Internet recherchiert und gestöbert.
										Heute möchte ich mein Wissen teilen und lade gerne zum Austausch ein.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container blog-teaser">
					<div className="row">
						<Masonry>
							{childElements}
						</Masonry>
					</div>
				</div>
			</div>
		)
	}
}

export default BlogOverview

export const pageQuery = graphql`
query Name {
  blogOverview: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-overview"}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
  blogPost: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter { 
          date(formatString: "DD MMMM, YYYY")
          title
          previewImage
        }
      }
    }
  }
}

`