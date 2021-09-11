import * as React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from '../images/icon.png'
import { Link } from 'gatsby'

const MLayout = ({ pageTitle, pageSubtitle, children }) => {

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
        <div className="mx-auto container mt-6 lg:max-w-screen-lg">
            <title>{pageTitle}</title>
            <nav className="flex p-7 bg-gray-200 rounded items-center">
                <ul className="flex">
                    {
                        links.map(
                            link => (
                                <li
                                    key={link.to}
                                >
                                    <AniLink
                                        paintDrip
                                        partiallyActive={true}
                                        className="p-2 bg-violet-50 hover:bg-violet-200 rounded-full ml-4"
                                        activeClassName="bg-violet-300 hover:bg-violet-300"
                                        to={link.to}
                                        duration={.8}
                                        hex={"#ffffff"}
                                    >
                                        {
                                            link.label
                                        }
                                    </AniLink>
                                </li>
                            )
                        )
                    }
                </ul>
                <div className="flex-1 h-16 flex flex-row justify-center">
                    <AniLink
                        paintDrip
                        hex={"#ffffff"}
                        duration={.8}
                        className="h-full w-16"
                        to={"/"}
                    >
                        <img
                            className="object-contain w-full min-h-0"
                            src={logo}
                            width={'100%'}
                            height={0}
                            alt={"gatsby"}
                        />
                    </AniLink>
                </div>
            </nav>
            <div className="my-12">
                <h1 className="special-display my-0 mb-1">{pageTitle}</h1>
                {pageSubtitle ? (<h5 className="my-0">{pageSubtitle}</h5>) : null}
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default MLayout