import * as React from 'react'
import { Link } from 'gatsby'

const MLayout = ({ pageTitle, children }) => {

    const links = [
        {
            to: "/posts",
            label: 'Posts'
        },
        {
            to: "/about",
            label: 'About'
        }
    ]

    return (
        <div className="mx-auto container">
            <title>{pageTitle}</title>
            <nav className="flex p-7 bg-gray-200 rounded my-6 items-center">
                <ul className="flex">
                    {
                        links.map(
                            link => (
                                <li
                                    key={link.to}
                                >
                                    <Link
                                        partiallyActive={true}
                                        className="p-2 bg-blue-50 hover:bg-blue-200 rounded-full ml-4"
                                        activeClassName="bg-blue-300 hover:bg-blue-300"
                                        to={link.to}
                                    >
                                        {
                                            link.label
                                        }
                                    </Link>
                                </li>
                            )
                        )
                    }
                </ul>
                <div className="flex-1 text-center">
                    <Link
                        to={"/"}
                    >
                        <h1>
                            Some company name
                        </h1>
                    </Link>
                </div>
            </nav>
            <main>
                <h2>{pageTitle}</h2>
                {children}
            </main>
        </div>
    )
}

export default MLayout