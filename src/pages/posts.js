import React from "react"
import {graphql, Link} from "gatsby"
import MLayout from "../components/m-layout";

const IndexPage = (props) => {
    const {
        data: {
            allMarkdownRemark: { edges },
        },
    } = props;

    const PostsList = () => {
        return (
            <ul>
                {
                    edges
                        .filter(edge => !!edge.node.frontmatter.date)
                        .map(({node}) => (
                            <li
                                key={node.id}
                            >
                                <Link

                                    to={node.frontmatter.slug}
                                    className="m-link"
                                >
                                    {node.frontmatter.title} ({node.frontmatter.date})
                                </Link>
                            </li>
                        ))
                }
            </ul>
        )
    }

    return <MLayout pageTitle={"Posts"}>
        <PostsList />
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