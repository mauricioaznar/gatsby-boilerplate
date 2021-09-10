import React, {useCallback, useEffect, useState} from "react"
import {graphql} from "gatsby"
import MLayout from "../components/m-layout";

const isBrowser = typeof window !== "undefined"

export default function Template({
                                     data, // this prop will be injected by the GraphQL query below.
                                 }) {
    const {markdownRemark} = data // data.markdownRemark holds your post data
    const {frontmatter, html, headings} = markdownRemark


    // https://www.gatsbyjs.com/docs/debugging-html-builds/
    // https://stackoverflow.com/questions/62497110/detect-scroll-direction-in-react-js
    const [y, setY] = useState(isBrowser ? window.scrollY : 0);
    const [isAfter, setIsAfter] = useState(false);

    const handleNavigation = useCallback(
        e => {
            if (isBrowser) {
                const window = e.currentTarget;
                if (y > window.scrollY) {
                } else if (y < window.scrollY) {
                }
                const clientHeight = document.documentElement.clientHeight;
                if (y > clientHeight / 3) {
                    setIsAfter(true)
                } else {
                    setIsAfter(false)
                }
                setY(window.scrollY);
            }
        }, [y]
    );

    const handleLinkClick = (e, id) => {
        if (isBrowser) {
            e.preventDefault();
            if (typeof id === 'string') {
                const element = document.getElementById(id);
                if (element !== null) {
                    const viewportOffset = element.getBoundingClientRect();
                    const top = viewportOffset.top;
                    window.scrollTo({top: top, behavior: 'smooth'});
                }
            } else {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
    }

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
        <MLayout pageTitle={frontmatter.title} pageSubtitle={frontmatter.date}>

            <div className="markdown-pages mb-16">
                {
                    headings.length > 0 ?
                        (<div className="markdown-pages-toc mb-8">
                            <h1 className="markdown-pages-toc-title">
                                Table of contents
                            </h1>
                            <ul>
                                {
                                    headings.map(
                                        heading => (
                                            <li
                                                className={`ml-${(3 * (heading.depth - 1))}`}
                                                key={heading.id}
                                            >
                                                <a
                                                    onClick={(e) => {handleLinkClick(e, heading.id)}}
                                                    className="m-link"
                                                    href={`#${heading.id}`}
                                                >
                                                    &gt; {heading.value}
                                                </a>
                                            </li>
                                        )
                                    )
                                }
                            </ul>
                        </div>)
                        : null
                }

                <div
                    className="markdown-pages-content"
                    dangerouslySetInnerHTML={{__html: html}}
                />
                <div className={`fixed bottom-2 right-2 transition-opacity duration-500 ${(isAfter ? '' : 'opacity-0')}`}>
                    <a href="#top" onClick={(e) =>{ handleLinkClick(e, 0) }}>
                        <button
                            className="animate-bounce bg-blue-500 hover:bg-blue-700 text-white font-sans font-bold py-2 px-4 rounded text-gray-50"
                            >
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