import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from "../pages/header"
import DarkTrace from "../pages/darkTrace"
import ScrollProgressBar from "../pages/scrollProgressBar"
import Footer from "../pages/footer"
import Lnk from "../pages/lnk"
import ShareButtons from "../components/share/sharebuttons.component"

export default function PageTemplate({ data: { mdx } }) {
  return (
    // <div>
    //   <div>
    //     <h1>{mdx.frontmatter.title}</h1>
    //     <h4
    //       style={{
    //         color: "gray",
    //         fontWeight: "normal",
    //       }}
    //     >{`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}</h4>
    //     <MDXRenderer>{mdx.body}</MDXRenderer>
    //   </div>
        <main class="min-h-screen flex flex-col justify-between bg-gray-100">
            <div>
                <Header directory="../"/>
                <DarkTrace></DarkTrace>
                <ScrollProgressBar></ScrollProgressBar>
                <div class="flex flex-col items-center w-full">
                    <p class="mt-5 text-3xl sm:text-5xl">{mdx.frontmatter.title}</p>
                    <div class="mt-5 px-10 flex flex-col lg:flex-row lg:justify-between justify-between w-full">
                        <p class="my-2 text-sm lg:text-xl text-center">On {mdx.frontmatter.date} by {mdx.frontmatter.author}</p>
                        <ShareButtons title={`Read ${mdx.frontmatter.title}`} url={`https://francoisvogel.io/${mdx.frontmatter.slug}`} twitterHandle="fgvogel" tags="#fgvogel" />
                        <p class="my-2 text-sm text-center sm:text-xl text-gray-400 font-bold">{mdx.frontmatter.read} min read</p>
                    </div>
                    <div class="mx-5 my-3">
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </main>
  )
}

export const pageQuery = graphql`
query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
        id
        body
        frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            description
            read
            slug
        }
    }
}
`