import React from 'react'
import Layout from './Components/Layout'
import { homeWrapper, cover, coverContainer,mainbody,taglist,recipelist } from '../Styles/Home.module.css'
import {recipelist2} from '../Styles/Recipe.module.css'
import TagList from "./Components/TagList"
import ReceipeList from "./Components/ReceipeList"

function Receipe() {
    return (
        <Layout><div className={homeWrapper}>

      <div className={mainbody}>

       <div className={taglist}>
        
        <TagList />
       </div>
       <div className={recipelist,recipelist2}>
       
         <ReceipeList />
       </div>
      </div>
     
     {/* Body of main */}
        Recipe Page
    </div>
    </Layout>
    )
}

export default Receipe
