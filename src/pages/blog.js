import * as React from "react"
import { Link, graphql } from "gatsby"
import '../styles/global.css'
import Header from "./header"
import DarkTrace from "./darkTrace"
import ScrollProgressBar from "./scrollProgressBar"
import Footer from "./footer"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "./layout"

// const Blog = () => {
//     return (
//         <main class="min-h-screen flex flex-col justify-between">
//             <div>
//                 <Header directory=""/>
//                 <DarkTrace></DarkTrace>
//                 <ScrollProgressBar></ScrollProgressBar>
//                 <div class="flex flex-col items-center w-full h">

//                 </div>
//             </div>
//             <Footer></Footer>
//         </main>
//     )
// }

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Posts">
            {
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p>Posted: {node.frontmatter.date}</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        id
        body
        }
    }
}
`

export default BlogPage