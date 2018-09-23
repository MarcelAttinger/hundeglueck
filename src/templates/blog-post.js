import React from 'react';
import Link from "gatsby-link";

const BlogPostTemplate = ({
	                          content,
	                          description,
	                          title,
	                          blogImage
                          }) => {
	return (
		<article className="blogpost">
			<div className="article-header">
				<figure>
					<img src={blogImage} alt="Blogpic"/>
				</figure>
				<div className="col article-header-content">
					<div id="breadcrumb">
						<Link to="/">
							Home
						</Link>
						<span> > </span>
						<Link to="/blog-overview/">Blog</Link>
						<span> > </span>
						<span>{title}</span>
					</div>
					<div className="text">
						<h1>{title}</h1>
						<div className="subheadline">
							In meiner langjährigen Erfahrung als Hundehalterin und Trainerin habe ich selbst viel im
							Internet recherchiert und gestöbert.
							Heute möchte ich mein Wissen teilen und lade gerne zum Austausch ein.
						</div>
						<div className="content" dangerouslySetInnerHTML={{__html: content}}/>
					</div>
				</div>
			</div>
		</article>
	)
};

const BlogPost = ({data}) => {
	const {markdownRemark: post} = data;

	return (
		<BlogPostTemplate
			content={post.html}
			description={post.frontmatter.description}
			title={post.frontmatter.title}
			blogImage={post.frontmatter.blogImage}
		/>
	)
};

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        blogImage
      }
    }
  }
`;