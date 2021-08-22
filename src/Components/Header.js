import React, { useState,useEffect } from 'react'
import { Link } from 'gatsby'
import { nav, headerWrapper, menulist,ListMenu,contactlink,HideMenu, menubar, contactbtn, logo, activelink, navbtn, menuicon, headstyle, active, navContainer, menu, headsection } from '../Styles/Header.module.css'
import { FaBars } from 'react-icons/fa'
function Header() {
  const [status, setstatus] = useState(false)
  const[screenwidth,setscreenwidth]=useState(0)
  
  const actualwidth=()=>{
    setscreenwidth(window.innerWidth)
  }
  
  useEffect(() => {
    
    window.addEventListener("resize",actualwidth)

    if(screenwidth >= 901)
     setstatus(false)

    return () => {
      window.removeEventListener("resize",actualwidth)
    }
  }, [screenwidth])
  return (
    <div>
      <div className={headerWrapper}>
        <div className={logo}>
          <h2>Simply<span style={{ color: "#292626" }}>Recipe</span></h2>
        </div>
        <div className={menulist}>
          <ul>
          <li><Link to="/" activeClassName={activelink}>Home</Link></li>
            <li><Link to="/recipe" activeClassName={activelink}>Recipe</Link></li>
            <li><Link to="/tags" activeClassName={activelink}>Tags</Link></li>
            <li><Link to="/about" activeClassName={activelink}>About</Link></li>
            
          </ul>
        </div>

        <div className={contactbtn}>
          <ul>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className={menubar}>
          <FaBars onClick={()=>setstatus(!status)} />

        </div>
      </div>

      <div className={status? ListMenu:HideMenu}>
      <ul>
            <li><Link to="/" activeClassName={activelink}>Home</Link></li>
            <li><Link to="/recipe" activeClassName={activelink}>Recipe</Link></li>
            <li><Link to="/tags" activeClassName={activelink}>Tags</Link></li>
            <li><Link to="/about" activeClassName={activelink}>About</Link></li>
            <div className={contactlink}><li><Link to="/contact">Contact</Link></li></div>
          </ul>
      </div>
      

    </div>

              //  End 

    
  )
}

export default Header
