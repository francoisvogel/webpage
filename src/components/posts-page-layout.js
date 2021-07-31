import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Header from "../pages/header"
import DarkTrace from "../pages/darkTrace"
import ScrollProgressBar from "../pages/scrollProgressBar"
import Footer from "../pages/footer"
import Lnk from "../pages/lnk"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <h4
          style={{
            color: "gray",
            fontWeight: "normal",
          }}
        >{`${mdx.frontmatter.date} by ${mdx.frontmatter.author}`}</h4>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        author
      }
    }
  }
`