import React from 'react'
import Layout from '../Components/Layout'
import cookingrecipe from '../Images/cookingrecipe.jpg'
import {aboutmaincontainer,topaboutseciton,loweraboutsection,aboutcontactbtn,descriptionsection,imagesection} from '../Styles/About.module.css'
import { Link ,graphql} from 'gatsby'
import FeaturesImages from '../Components/FeaturesImages'
import SEO from '../Components/SEO'

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
                            
                            <img src={cookingrecipe} alt="cooking" width="90%" />
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
