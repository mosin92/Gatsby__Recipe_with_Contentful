import { Link } from 'gatsby'
import React from 'react'
import {taglist} from '../Styles/Home.module.css'
import { useStaticQuery, graphql } from "gatsby"
import TagSetup from '../Utils/TagSetup'
import slugify from 'slugify'
function TagList() {
    const data = useStaticQuery(graphql`
    {
      allContentfulRecipeApp {
        nodes {
          contetn {
            tags
          }
        }
      }
    }
  `)
  
    const newArray=TagSetup(data)
    console.log(newArray)
    return (
        <div className={taglist}>
            <h2>Recipe</h2>
            <ul>
                {
                    newArray.map((tag,index)=>{
                        const [text,value]=tag
                        const slug=slugify(text,{lower:true})
                        return (
                                    <li key={index}>
                                    <Link to={`/tags/${slug}`}>{text} ({value})</Link>
                                    </li>
                                )
                    })
                }
               
            </ul>
        </div>
    )
}

export default TagList
