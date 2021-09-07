import React from 'react'
import Layout from '../Components/Layout'
import {tagcontainer,tagboxcontainer} from '../Styles/Tag.module.css'
import { graphql, Link } from "gatsby"
import TagSetup from '../Utils/TagSetup'
import slugify from 'slugify'
import SEO from '../Components/SEO'
function Tags({data}) {

    const newArray=TagSetup(data)

    return (
        <div>
            <Layout>
              <SEO title="Tags" />
                <div className={tagcontainer}>
                 
                 {newArray.map((item,index)=>{
                     const[text,value]=item
                     const slug=slugify(text,{lower:true})
                     return(
                      <div className={tagboxcontainer} key={index} >
                         <Link to={`/tags/${slug}`} >
                        
                            <h4>{text}</h4>
                            <p>{value} recipe</p>
                    
                         </Link>
                         </div>
                         
                     )
                     
                 })}
                    
                </div>
            </Layout>
            
        </div>
    )
}

export const query = graphql`
  {
    allContentfulRecipeApp {
      nodes {
        contetn {
          tags
        }
      }
    }
  }
`

export default Tags
