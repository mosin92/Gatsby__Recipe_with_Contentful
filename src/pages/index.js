import React from "react"
import { homeWrapper, cover, coverContainer,mainbody,taglist,recipelist } from '../Styles/Home.module.css'
import Layout from "../Components/Layout"
import img1 from '../Images/cover1.jpg'
import TagList from "../Components/TagList"
import ReceipeList from "../Components/ReceipeList"
import SEO from "../Components/SEO"
export default function Home() {
  return (
    <Layout>
      <SEO title="Home"/>
      <div className={homeWrapper}>


      <div className={cover}>
        <div className={coverContainer}>
          <div>
            <h1>Simple Recipes</h1>
          </div>
          <div>
            <h5>No Fluff , Just Recipes</h5>
          </div>
          
        </div>
      </div>
      <div className={mainbody}>

       <div>
        
        <TagList />
       </div>
       <div className={recipelist}>
       
         <ReceipeList />
       </div>
      </div>
     
     {/* Body of main */}

    </div>
    </Layout>

  )
}
