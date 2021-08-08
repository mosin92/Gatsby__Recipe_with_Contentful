import React from 'react'
import img2 from '../../Images/recipe1.jpg'
import snackimg from '../../Images/snacks1.jpg'
import burger from '../../Images/burger.jpg'
import chocolatecake from '../../Images/cholateCake.jpg'
import {recipeimg,recipewrapper,recipecontainer} from '..//../Styles/Home.module.css'
function ReceipeList() {
    return (
        <div className={recipewrapper}>
            <div className={recipecontainer}>
            <div className={recipeimg}>
                        <img src={img2}  alt="image"  />
                        </div>
                        <div>
                        <h3>Banana CupCake</h3> 
                        </div>
                        <div>
                            <p>Prep: 14min | Cook : 15mn</p>
                        </div>
            </div>
            {/* {Next Image} */}
            <div className={recipecontainer}>
            <div className={recipeimg}>
                        <img src={snackimg}  alt="image"  />
                        </div>
                        <div>
                        <h3>Banana CupCake</h3> 
                        </div>
                        <div>
                            <p>Prep: 14min | Cook : 15mn</p>
                        </div>
            </div>
            {/* {Next Image} */}
            <div className={recipecontainer}>
            <div className={recipeimg}>
                        <img src={burger}  alt="image"  />
                        </div>
                        <div>
                        <h3>Banana CupCake</h3> 
                        </div>
                        <div>
                            <p>Prep: 14min | Cook : 15mn</p>
                        </div>
            </div>
            {/* {Next Image} */}
            <div className={recipecontainer}>
            <div className={recipeimg}>
                        <img src={chocolatecake}  alt="image"  />
                        </div>
                        <div>
                        <h3>Banana CupCake</h3> 
                        </div>
                        <div>
                            <p>Prep: 14min | Cook : 15mn</p>
                        </div>
            </div>
            {/* {Next Image} */}
        </div>
    )
}

export default ReceipeList
