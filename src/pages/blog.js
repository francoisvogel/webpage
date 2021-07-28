import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import '../styles/global.css'
import Header from "./header"
import DarkTrace from "./darkTrace"
import ScrollProgressBar from "./scrollProgressBar"
import Footer from "./footer"
import Lnk from "./lnk"

const Blog = ({data}) => {
    return (
        <main class="min-h-screen flex flex-col justify-between bg-gray-100">
            <div>
                <Header directory="../"/>
                <DarkTrace></DarkTrace>
                <ScrollProgressBar></ScrollProgressBar>
                <div class="flex flex-col items-center w-full">
                    {
                        data.allMdx.nodes.map((node) => (
                            <div key={node.id} class="mt-5 mb-5 w-full sm:w-4/5 bg-white shadow-2xl overflow-hidden h-500px">
                                <p class="mt-3 text-3xl text-center sm:text-5xl mb-3">{node.frontmatter.title}</p>
                                <p class="mx-8 text-2xl sm:text-3xl mb-2 font-extrabold">{node.frontmatter.description}</p>
                                <div class="mx-7 flex flex-row justify-between">
                                    <p class="text-lg sm:text-xl">On {node.frontmatter.date} by {node.frontmatter.author}</p>
                                    <p class="text-lg sm:text-xl text-gray-400 font-bold">{node.frontmatter.read} min read</p>
                                </div>
                                <div>
                                    <p class="sm:text-lg mt-3 mx-8">
                                        <MDXRenderer>
                                            {node.body}
                                        </MDXRenderer>
                                    </p>
                                    <div class="bg-gradient-to-b from-transparent to-white sticky bottom-5 h-100px z-40"></div>
                                    <div class="p-2 bg-white text-center text-xl sm:text-2xl sticky bottom-0 z-50"><Lnk to={{node.frontmatter.slug}}" text="Read More" /></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer></Footer>
        </main>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                author
                description
                read
                slug
            }
        id
        body
        }
    }
}
`

export default Blog