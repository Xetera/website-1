import React from "react"

import packageJson from "../../../package.json"
import { Container } from "../../components/Container"
import { ContentPage } from "../../components/ContentPage"
import { Content } from "../../components/Content"
import { Link } from "../../components/Link"
import { ResourcesList } from "../../components/ResourcesList"
import { SEO } from "../../components/SEO"
import { HeaderBarebone } from "../../components/HeaderBarebone"

function ResourcesPage() {
  return (
    <>
      <SEO title="Resources" />
      <HeaderBarebone
        title="Welcome to the TPH resources"
        content={
          <>
            <p>
              This is meant as a small knowledge base for commonly answered
              questions on our Discord community,{" "}
              <Link to="/about">The Programmer's Hangout</Link>.
            </p>
            <p>
              All of it is open source, and you can contribute to it on{" "}
              <Link to={packageJson.repository.url}>GitHub</Link>.
            </p>
          </>
        }
      />

      <ContentPage>
        <Container>
          <Content>
            <ResourcesList />
          </Content>
        </Container>
      </ContentPage>
    </>
  )
}

export default ResourcesPage
