import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div className="primary-content">
          <p>{data.site.siteMetadata.home.description}</p>
          <p>I really hope that some notes can be useful to you :)</p>
        </div>
        <a href="https://inconis.it/" target="_blank" className="button -primary">Visit my Website &rarr;</a>
      </div>
    )}
  />
)