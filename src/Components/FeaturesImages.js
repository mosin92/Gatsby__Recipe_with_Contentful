import React from 'react'
import {featurecontainer,featureimg} from '../Styles/FeatureImages.module.css'
import img2 from '../Images/recipe1.jpg'
import { Link,graphql, useStaticQuery } from 'gatsby'
import {recipeimg,recipewrapper,recipecontainer} from '../Styles/Home.module.css'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
const query = graphql`
  {
    allContentfulRecipeApp(
      sort: {fields: title, order: ASC}
      filter: {features: {eq: true}}
    ) {
      nodes {
        id
        title
        prepTime
        cookTime
        images {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
function FeaturesImages() {
    // console.log(recipe)
    const data = useStaticQuery(query)
    const recipe = data.allContentfulRecipeApp.nodes
    
    return (
        <div className={featurecontainer}>

            {/* Features Images Set */}
            {
                recipe.map(item => {
                    const { id, title, prepTime, cookTime, images } = item
                    const pathToImage = getImage(images)
                    const slug=slugify(title,{lower:true})
                    return (
                        <div className={recipecontainer}>
                            <Link to={`/${slug}`} >
                                <div className={featureimg}>
                                    <GatsbyImage image={pathToImage} alt={title} />
                                </div>
                                <div>
                                    <h3>{title}</h3>
                                </div>
                                <div>
                                    <p>Prep: {prepTime}min | Cook : {cookTime}mn</p>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            
        </div>
    )
}


export default FeaturesImages
