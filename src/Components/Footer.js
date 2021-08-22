import React from 'react'
import {Footerwrapper} from '../Styles/Footer.module.css'
function Footer() {
    return (
        <div className={Footerwrapper}>
           <h3><span style={{color:"white"}}>&copy;2021 </span> SimplyRecipe <span style={{color:"white"}}>. Built with</span> Gatsby <span style={{color:"white"}}>&</span> Contentful </h3> 
        </div>
    )
}

export default Footer
