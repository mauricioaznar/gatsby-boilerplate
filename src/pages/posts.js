import React from "react"
import { graphql } from "gatsby"
import MLink from "../components/m-link"
import MLayout from "../components/m-layout";

const IndexPage = (props) => {
    const {
        data: {
            allMarkdownRemark: { edges },
        },
    } = props;

    const Posts = edges
        .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map(edge => <MLink key={edge.node.id} post={edge.node} />)

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