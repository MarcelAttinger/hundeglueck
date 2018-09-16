import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Stage from '../components/stage';
import LeftRightTeaser from '../components/left-right-teaser';
import FeaturedProducts from '../components/featured-products';
import Map from '../components/map-section';


export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		console.log({data});
		const {edges: posts} = data.allMarkdownRemark;

		return (
			<div>
				<Stage/>
				<FeaturedProducts />

				{/*<LeftRightTeaser leftRightTeasers = {posts[0].node.frontmatter.lrteasers} />*/}

				<div className="wide-teaser">
					<div className="container">
						<div className="row">
							<div className="text-area">
								<h2 className="mb-4">Wir stellen uns vor</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cum dolorem
								   enim ex id itaque nisi obcaecati quo similique! Amet distinctio eaque explicabo, fugiat hic
								   iure possimus praesentium quibusdam repellendus veniam? Accusamus aspernatur commodi
								   cupiditate eum officiis perferendis quam, quisquam tempore. Aliquid aspernatur corporis
								   deleniti eius facere id nulla perspiciatis quae sapiente tenetur totam, ullam! Adipisci
								   alias aliquam amet asperiores aut debitis distinctio dolor eligendi, error est eveniet
								   exercitationem explicabo illum iure magnam molestiae numquam, placeat quasi quo voluptatum.</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis, possimus. Cupiditate,
								   distinctio enim error eveniet id ipsa iure non nostrum porro quaerat quos repudiandae saepe sapiente.
								   Asperiores delectus dolor, expedita laudantium molestiae quam ratione. Alias culpa eveniet facere magnam
								   minus modi natus quam tempora totam vitae. Ab, laborum nobis!</p>
							</div>
						</div>
					</div>
				</div>

				<Map />

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
