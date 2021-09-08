import React from "react"
import { graphql } from "gatsby"
import MLayout from "../components/m-layout";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <MLayout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h2 className="my-0 mb-1">{frontmatter.title}, </h2>
                    <h3 className="text-base my-0 mb-2">{frontmatter.date}</h3>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </MLayout>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`