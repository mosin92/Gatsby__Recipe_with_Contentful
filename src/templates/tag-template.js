import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../Components/Layout'
import { wrapper, tagbox, tagcontainer,tagimg } from '../Styles/Tagtemplate.module.css'
import img2 from '../Images/burger.jpg'
import slugify from 'slugify'
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import SEO from '../Components/SEO'
function tagTemplate({ data ,pageContext}) {
    
    const recipe=data.allContentfulRecipeApp.nodes
    return (
        <Layout>
            <SEO title={pageContext.tag} />
            <div className={wrapper}>
            <h2>{pageContext.tag}</h2>
            <div className={tagcontainer}>
                {
                    recipe.map(item=>{
                        const {title,cookTime,prepTime}=item
                        const slug=slugify(title,{lower:true})
                        const pathToImage=getImage(item.images)
                        return(
                             
                         <div className={tagbox} key={item.id}>
                           <Link to={`/${slug}`}  >
                        <div className={tagimg}>
                            <GatsbyImage image={pathToImage} alt={title} />
                          
                        </div>
                        <div>
                            <h3>{title}</h3>
                        </div>
                        <div>
                            <p>Prep:{prepTime}  min | Cook {cookTime}: min</p>
                        </div>
                    
                    
                    </Link>
                    </div>
                        )
                       
                    })
                }
                </div>

                   

            </div>
        </Layout>
    )
}

export const query = graphql`
query GetRecipeTag($tag: String) {
    allContentfulRecipeApp(
      sort: {fields: title, order: ASC}
      filter: {contetn: {tags: {eq: $tag}}}
    ) {
      nodes {
        id
        prepTime
        cookTime
        title
        contetn {
          tags
        }
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          title
        }
      }
    }
  }
  
`

export default tagTemplate
