import React from 'react'
import { wrapper, instructionbox, ingredientbox, toolsection, ingredientlist, stepnumberstyle, stepswrapper, insturctionlist, stepstyle, barline } from '../Styles/RecipeInstruction.module.css'

function RecipeInstruction({ instructions, ingredients, tools }) {

    return (
        <div className={wrapper}>

            <div className={instructionbox}>
                <h2>Instuctions </h2>
                <div className={stepswrapper}>
                    {
                        instructions.map((item, index) => {
                            return(
                                <div key={index}>
                                <div className={stepstyle}>

                                    <p className={stepnumberstyle} >STEP {index + 1} </p>
                                    <span className={barline}></span>

                                </div>

                                <p className={insturctionlist}>{item}</p>
                                </div>

                            )
                        }
                          )
                    }

                </div>
                


            </div>

            {/* Ingredients Setion Starts */}

            <div className={ingredientbox}>
                <h2>Ingredients</h2>

                {/* Ingredients List */}

                {
                    ingredients.map((ingredient, index) => {
                        return (
                            <div key={index} className={ingredientlist}>
                                <p>
                                    {ingredient}
                                </p>
                            </div>
                        )
                    })
                }




                {/* Tools Section  */}

                <div className={toolsection}>
                    <h2>Tools</h2>

                    {
                        tools.map((tool, index) => {
                            return (
                                <div key={index} className={ingredientlist}>
                                    <p>
                                        {tool}
                                    </p>
                                </div>
                            )
                        })
                    }




                </div>

            </div>
        </div>
    )
}

export default RecipeInstruction
