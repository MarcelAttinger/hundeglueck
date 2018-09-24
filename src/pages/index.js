import React from 'react';
import Link from 'gatsby-link';
import Stage from '../components/stage';
import FeaturedProducts from '../components/featured-products';
import WideTeaser from '../components/wide-teaser';


export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		const {edges: posts} = data.allMarkdownRemark;

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
									titel
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
	            linkTarget
	            blank
	        }
          }
        }
      }
    }
  }
`
