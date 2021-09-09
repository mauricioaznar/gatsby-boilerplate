import React, {useCallback, useEffect, useState} from "react"
import { graphql } from "gatsby"
import MLayout from "../components/m-layout";

const isBrowser = typeof window !== "undefined"

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html, headings } = markdownRemark



    // https://www.gatsbyjs.com/docs/debugging-html-builds/
    // https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
    const [y, setY] = useState(isBrowser ? window.scrollY : 0);

    const handleNavigation = useCallback(
        e => {
            if (isBrowser) {
                const window = e.currentTarget;
                if (y > window.scrollY) {
                    console.log("scrolling up", y);
                } else if (y < window.scrollY) {
                    console.log("scrolling down", y);
                }
                setY(window.scrollY);
            }
        }, [y]
    );

    useEffect(() => {
        if (isBrowser) {
            setY(window.scrollY);
            window.addEventListener("scroll", handleNavigation);

            return () => {
                window.removeEventListener("scroll", handleNavigation);
            };
        }
        return () => {

        }
    }, [handleNavigation]);


    return (
        <MLayout>
            <div className="markdown-pages">
                <div>
                    <div id="top"/>
                    <h2 className="my-0 mb-1">{frontmatter.title}</h2>
                    <h5 className="my-0 mb-8">{frontmatter.date}</h5>
                    <div className="mb-8">
                        <h3>
                            Table of contents
                        </h3>
                        <ul>
                            {
                                headings.map(
                                    heading => (
                                        <li
                                            className={`ml-${(3 * (heading.depth - 1))}`}
                                            key={heading.id}
                                        >
                                            <a
                                                className="m-link"
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
                    <div
                        className="markdown-pages-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque error excepturi, illo ipsa, maxime molestias natus nihil perspiciatis quae quam repellat repellendus sapiente ullam. Blanditiis cumque dolores dolorum reprehenderit voluptates.</p>
                </div>
                <div className="fixed bottom-2 right-2 invisible">
                    <a href="#top">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded text-gray-50">
                            Back to top
                        </button>
                    </a>
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