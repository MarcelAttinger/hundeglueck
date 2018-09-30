import React from 'react';
import Link from 'gatsby-link';
import Stage from '../components/stage';
import FeaturedProducts from '../components/featured-products';
import WideTeaser from '../components/wide-teaser';
import LeftRightTeaser from '../components/left-right-teaser';
import Events from '../components/events';


export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		const {edges: posts} = data.allMarkdownRemark;

		return (
			<div>
				<Stage stageprops={posts[0].node.frontmatter.stage} />
				{/*<FeaturedProducts featuredProducts={posts[0].node.frontmatter.featuredProducts} />*/}

				<LeftRightTeaser leftRightTeasers = {posts[0].node.frontmatter.lrteasers} />

				<WideTeaser wideprops={posts[0].node.frontmatter.wideTeaser} />

				<Events events = {posts[0].node.frontmatter.events} />
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
			lrteasers {
                image
				imageAlt
				headline
				paragraph
				linkTarget
				linkDesc
			}
	        wideTeaser { 
	            headline
	            description 
	        }
	        events {
	            startDate
	            endDate
	            image
	            imageAlt
	            headline
	            paragraph
	            linkTarget
	            linkDesc
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
