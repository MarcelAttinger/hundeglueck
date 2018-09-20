import React from 'react';
import Link from 'gatsby-link';
import ArticleHeader from '../components/article-header';

class BlogOverview extends React.Component {
	render() {
		const {data} = this.props;
		//Overview Site Data
		const {edges: overViewdata} = data.blogOverview;
		//Blog Posts Data
		const {edges: posts} = data.blogPost;

		return (
			<div className="blog-overview">
				<ArticleHeader />

				<div className="blog-teaser">
					<div className="container">
						<div className="row">
							<div className="col">
								{posts.map(({ node }) => {
									const title = node.fields.slug;
									return (
										<div key={node.fields.slug}>
											<h3>
												<Link to={node.fields.slug}>
													{title}
												</Link>
											</h3>
											<small>{node.frontmatter.date}</small>
											<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
										</div>
									)
								})}
							</div>
						</div>
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
        }
      }
    }
  }
}

`