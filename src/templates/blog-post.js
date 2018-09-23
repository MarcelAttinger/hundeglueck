import React from 'react';
import Link from "gatsby-link";

const BlogPostTemplate = ({
	                          content,
	                          subheadline,
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
							{subheadline}
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
			subheadline={post.frontmatter.subheadline}
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
        subheadline
        blogImage
      }
    }
  }
`;