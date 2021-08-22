import React from 'react'
import { recipeimg, recipewrapper, recipecontainer ,wrappercontainer } from '../Styles/Home.module.css'
import { graphql, useStaticQuery,Link } from 'gatsby'
import { GatsbyImage,getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'

const query = graphql`
  {
    allContentfulRecipeApp(sort: {fields: title, order: ASC}) {
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
function ReceipeList() {
    const data = useStaticQuery(query)
    const recipe = data.allContentfulRecipeApp.nodes
    console.log(recipe)
   
    return (
        <div className={recipewrapper}>
            
                {
                recipe.map((item) => {
                    const { id, title, prepTime, cookTime, images } = item
                    const pathToImage=getImage(images)
                    const slug=slugify(title,{lower:true})
                    return (
                        <div className={recipecontainer} key={id}>
                            <Link to={`/${slug}`} >
                                <div className={recipeimg}>

                                    <GatsbyImage image={pathToImage} alt={title} />

                                </div>
                                <div>
                                    <h3>{title}</h3>
                                </div>
                                <div>
                                    <p>Prep: {prepTime} min | Cook : {cookTime} min</p>
                                </div>
                            </Link>
                        </div>
                    )
                    })
                }

           
        </div>
    )
}

export default ReceipeList
