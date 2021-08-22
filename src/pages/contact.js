import React from 'react'
import Layout from '../Components/Layout'
import cookingrecipe from '../Images/cookingrecipe.jpg'
import {aboutmaincontainer,loweraboutsection} from '../Styles/About.module.css'
import {contactformsection,topcontactsection,contactdesciptionsection} from '../Styles/Contact.module.css'
import FeaturesImages from '../Components/FeaturesImages'
import SEO from '../Components/SEO'
function Contact() {
    return (
        <div>
            <Layout>
                <SEO title="Contact"/>
            <div className={aboutmaincontainer}>
               

               {/* Section 1 Top Body */}
               <div className={topcontactsection}>

                   {/* Left Description Seciton */}

                   <div className={contactdesciptionsection}>
                       <h1>Want To Get In Touch?</h1>
                       <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.

                            Cardigan prism bicycle rights put a bird on it deep v.

                            Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke</p>
                          
                         
                   </div>

                   {/* Right Contact Form Section */}

                   <div className={contactformsection}>
                      
                       <form
                       
                       action="https://formspree.io/f/xbjqpqpg"
                        method="POST">
                           <div>
                               <p>Your Name</p>
                               <input type="text" name="name" required />
                           </div>
                           <div>
                               <p>Your Email</p>
                               <input type="email" name="email" required/>
                           </div>
                           <div>
                               <p>Message</p>
                               <textarea rows="4" name="message" cols="48" /> 
                           </div>
                           <input type="submit" />
                       </form>
                      
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

export default Contact
