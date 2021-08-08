import { Link } from 'gatsby'
import React from 'react'
import {taglist} from '..//../Styles/Home.module.css'
function TagList() {
    return (
        <div className={taglist}>
            <h2>Recipe</h2>
            <ul>
                <li><Link to="">Breakfast</Link> </li>
                <li><Link to="">Food</Link></li>
                <li><Link to="">Dinner</Link></li>
                <li><Link to="">Food</Link></li>
                <li><Link to="">Bakery Item</Link></li>
                <li><Link to="">Food</Link></li>
                <li><Link to="">Breakfast</Link></li>
                <li><Link to="">Food</Link></li>
            </ul>
        </div>
    )
}

export default TagList
