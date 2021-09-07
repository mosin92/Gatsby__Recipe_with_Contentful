import React from 'react'
import {Helmet} from 'react-helmet'
import {useStaticQuery,graphql} from 'gatsby'
function SEO({title,description}) {
   const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)
  const {site:{siteMetadata:{title:sitetitle ,description:sitedescription}}}=data
  const metadescription=description || sitedescription
    return (
       <Helmet title={`${title} | ${sitetitle}`} meta={[{name:"description",content:metadescription}]}>

       </Helmet>
    )
}

export default SEO
