import React from "react"
import {graphql, Link} from "gatsby"
import MLayout from "../components/m-layout";

const IndexPage = (props) => {
    const {
        data: {
            allMarkdownRemark: { edges },
        },
    } = props;

    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(({node}) => (
            <Link
                key={node.id}
                to={node.frontmatter.slug}
                className="text-blue-300 hover:text-blue-500"
            >
                {node.frontmatter.title} ({node.frontmatter.date})
            </Link>
        ))

    return <MLayout pageTitle={"Posts"}>
        <div>{Posts}</div>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </MLayout>
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`