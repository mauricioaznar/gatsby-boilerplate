import React from "react"
import {Link} from "gatsby"

const MLink = ({post}) => (
    <div>
        <Link
            to={post.frontmatter.slug}
            className="text-blue-300 hover:text-blue-500"
        >
            {post.frontmatter.title} ({post.frontmatter.date})
        </Link>
    </div>
)

export default MLink