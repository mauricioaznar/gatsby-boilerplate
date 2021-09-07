// Step 1: Import React
import * as React from 'react'
import {Link} from "gatsby";
import Layout from "../components/layout";

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout
            pageTitle={"Home page"}
        >
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <p>
                <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
                <br />
                <Link to="/blog/my-second-post/">Go to my second Markdown blog post</Link>
            </p>
        </Layout>
    )
}

// Step 3: Export your component
export default IndexPage