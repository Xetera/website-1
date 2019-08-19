import { graphql } from "gatsby"
import React, { Fragment } from "react"
import { MarkdownRemark, Query } from "../../generated/graphql"
import { Markdown } from "../components/Markdown"
import { SEO } from "../components/SEO"

function AboutPage({ data }: ComponentQuery<{ md: MarkdownRemark }>) {
  const { md } = data

  return (
    <Fragment>
      <SEO title="About" />
      <Markdown content={md.html!} />
    </Fragment>
  )
}

export const query = graphql`
  query AboutPage {
    md: markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      html
    }
  }
`

export default AboutPage
