import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stage from '../components/stage';
import LeftRightTeaser from '../components/left-right-teaser';

export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		console.log({data});
		const {edges: posts} = data.allMarkdownRemark;

		return (
			<div>
				<Stage/>
				<LeftRightTeaser leftRightTeasers = {posts[0].node.frontmatter.lrteasers} />

				<div className="container">
					<h2>Lese hier meine nächsten Einträge:</h2>
					{posts.map(({node: post}) => (
						<div
							className="content"
							style={{border: '1px solid #eaecee', padding: '2em 4em'}}
							key={post.id}
						>
							<p>
								<Link className="has-text-primary" to={post.fields.slug}>
									{post.frontmatter.title}
								</Link>
								<span> &bull; </span>
								<small>{post.frontmatter.date}</small>
							</p>
							<p>
								{post.excerpt}
								<br />
								<br />
								<Link className="button is-small" to={post.fields.slug}>
									Keep Reading →
								</Link>
							</p>
						</div>
					))}
				</div>

				<Link to="/page-2/">Go to page 2</Link>
			</div>
		)
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index-page" } }}
    ) {
      edges { 
        node {
          id
          fields {
            slug 
          } 
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            masthead {
                image
                name
                claim
            } 
            services { 
                headline
                description
            }
            aboutMe {
                headline
                leftText
                rightText
            }
            lrteasers {
               image
               imageAlt
               headline
               paragraph
            } 
          }
        }
      }
    }
  }
`
