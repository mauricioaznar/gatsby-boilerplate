import React from "react"
import { graphql } from "gatsby"
import MLayout from "../components/m-layout";

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, headings } = markdownRemark

    const HeadingsList = () => (
        <div className="markdown-pages-toc">
            <h2>
                Table of contents
            </h2>
            <ul >
                {
                    headings.map(
                        heading => (
                            <li
                                className={`ml-${(3 * (heading.depth - 1))}`}
                                key={heading.id}
                            >
                                <a
                                    href={`#${heading.id}`}
                                >
                                    { heading.value }
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )

    return (
        <MLayout>
            <div className="markdown-pages">
                <div>
                    <h2 className="my-0 mb-1">{frontmatter.title}, </h2>
                    <h3 className="my-0 mb-2">{frontmatter.date}</h3>
                    <HeadingsList />
                    <div
                        className="markdown-pages-content"
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
       headings {
          depth
          value
          id
        }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`