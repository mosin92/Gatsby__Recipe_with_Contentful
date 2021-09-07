import React from 'react'
import Layout from '../Components/Layout'
import {aboutmaincontainer,topaboutseciton,loweraboutsection,aboutcontactbtn,descriptionsection,imagesection} from '../Styles/About.module.css'
import { Link } from 'gatsby'
import FeaturesImages from '../Components/FeaturesImages'
import SEO from '../Components/SEO'
import {StaticImage} from 'gatsby-plugin-image'
function About() {

    return (
        <div>
            <Layout>
                <SEO title="About" />
                <div className={aboutmaincontainer}>
               

                    {/* Section 1 Top Body */}
                    <div className={topaboutseciton}>

                        {/* Left Description Seciton */}

                        <div className={descriptionsection}>
                            <h1>I'm baby coloring book poke taxidermy</h1>
                            <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.
                                Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                                <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                                <div className={aboutcontactbtn}>
                                   
                                    <ul>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                            
                                        </li>
                                    </ul>
                                </div>
                        </div>

                        {/* Right Image Section */}

                        <div className={imagesection}>
                            
                            <StaticImage 
                            src="../Images/cookingrecipe.jpg"
                            alt="cooking" width="100%" placeholder="blurred" layout="constrained" />
                            {/* <img src={cookingrecipe} alt="cooking" width="90%" /> */}
                        </div>
                     

                        {/* End Section 1 */}
                    </div>

                    {/* Section 2 Lower Body */}
                    <div className={loweraboutsection}>
                        
                        <h4>Look At This Awesomesouce!</h4>
                        <FeaturesImages />
                    </div>
                </div>
            </Layout>
            
        </div>
    )
}

export default About
