import React from 'react'
import { graphql, Link } from 'gatsby'
import { templatewrapper, herosection, tagdiv, icon, iconitem, iconSection, heroimageSection, detailsection, tagsection, tagitem, descriptionsection } from '../Styles/Template.module.css'
import Layout from '../Components/Layout'
import { BsClock, BsClockHistory, BsPeople } from "react-icons/bs";
import RecipeInstruction from '../Components/RecipeInstruction'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'
import SEO from '../Components/SEO'
function RecipeTemplate({ data }) {
    const { title, contetn, cookTime, prepTime, serving, images, descriptino: { descriptino: description } } = data.contentfulRecipeApp
    // const {descriptino:description}=descriptino
    const { ingredients, instructions, tags, tools } = contetn
    const pathToImage = getImage(images)
    

    return (
        <Layout>

                <SEO title={title} description={description} />

            <div className={templatewrapper}>

                {/* Hero Section */}
                <div className={herosection}>
                    <div className={heroimageSection}>

                        {/* <img src={img2} alt="cholateCake"  /> */}
                        <GatsbyImage image={pathToImage} alt={title} />
                    </div>

                    <div className={descriptionsection}>
                        <h2>{title}</h2>
                        <p>{description}</p>

                        <div className={iconSection}>

                            <div className={iconitem}>
                                <BsClock className={icon} />
                                <h6>Prep Time</h6>
                                <p>{prepTime} min</p>
                            </div>
                            <div className={iconitem}>
                                <BsClockHistory className={icon} />
                                <h6>CookTime</h6>
                                <p>{cookTime} min</p>
                            </div>
                            <div className={iconitem}>
                                <BsPeople className={icon} />
                                <h6>Serving</h6>
                                <p>{serving} min</p>
                            </div>
                        </div>

                        {/* Tag Section */}
                        <div className={tagsection}>
                            <div>
                                <span className={tagdiv}>Tags:</span>
                            </div>

                            {
                                tags.map((tag, index) => {
                                    const slug=slugify(tag,{lower:true})
                                    return (<Link to={`/tags/${slug}`} key={index}>
                                        <div className={tagitem}>
                                            {tag}
                                        </div>
                                    </Link>
                                    )
                                }


                                )
                            }

                        </div>
                    </div>


                </div>

                {/* Detail Section */}
                <div className={detailsection}>
                    <RecipeInstruction instructions={instructions} ingredients={ingredients} tools={tools} />
                </div>

            </div>
        </Layout>
    )
}

export const query = graphql`
query SingleRecipe($title: String) {
    contentfulRecipeApp(title: {eq: $title}) {
      title
      cookTime
      prepTime
      serving
      contetn {
        tags
        ingredients
        instructions
        tools
      }
      images {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      descriptino {
        descriptino
      }
    }
  }
`

export default RecipeTemplate
