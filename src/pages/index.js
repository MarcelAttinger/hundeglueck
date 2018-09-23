import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stage from '../components/stage';
import LeftRightTeaser from '../components/left-right-teaser';
import FeaturedProducts from '../components/featured-products';
import WideTeaser from '../components/wide-teaser';


export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		const {edges: posts} = data.allMarkdownRemark;
console.log(posts[0].node.frontmatter.featuredProducts);

		return (
			<div>
				<Stage stageprops={posts[0].node.frontmatter.stage} />
				<FeaturedProducts featuredProducts={posts[0].node.frontmatter.featuredProducts} />

				{/*<LeftRightTeaser leftRightTeasers = {posts[0].node.frontmatter.lrteasers} />*/}

				<WideTeaser wideprops={posts[0].node.frontmatter.wideTeaser} />

				<section className="container">
					<h3>Lese hier meine nächsten Einträge:</h3>
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
				</section>
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
            stage { 
	            image
	            headline
	            subHeadline
	            buttonText
	            buttonTarget
	        }
	        wideTeaser { 
	            headline
	            description 
	        }
	        featuredProducts {
	            image
	            headline
	        }
          }
        }
      }
    }
  }
`
