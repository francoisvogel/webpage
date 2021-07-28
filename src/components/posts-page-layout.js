import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <div style={{ padding: "0 1rem", marginBottom: "10rem" }}>
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