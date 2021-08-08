import React, { useState } from 'react'
import { Link } from 'gatsby'
import { nav, headerWrapper, menulist,ListMenu,contactlink,HideMenu, menubar, contactbtn, logo, activelink, navbtn, menuicon, headstyle, active, navContainer, menu, headsection } from '..//../Styles/Header.module.css'
import { FaBars } from 'react-icons/fa'
function Header() {
  const [status, setstatus] = useState(false)
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

    //     <div className={headerWrapper} >
    // <div className={headsection}>
    //  <div className={logo}>
    //         <h2>Simply<span style={{ color: "#292626" }}>Recipe</span></h2>
    //       </div>
    //       <div className={menuicon}><FaBars onClick={() => setstatus(!status)} /> </div>
    // </div>

    //       <div className={navContainer}>
    //       <nav className={status ? active :menu }>
    //             <div className={nav}>

    //              <ul >
    //             <div className={headstyle}><li><Link to="/" activeClassName={activelink}>Home</Link> </li></div>
    //             <div  className={headstyle}><li> <Link to="/recipe" activeClassName={activelink}>Recipe</Link> </li></div>

    //             <li><Link to="/tags" activeClassName={activelink}>Tags</Link></li>
    //             <li><Link to="/about" activeClassName={activelink}>About</Link></li>
    //             <li className={navbtn}> <button ><Link to="contact">Contact</Link></button></li>

    //           </ul>

    //         </div>
    //             </nav>


    //         <div className={contactbtn}><button ><Link to="contact">Contact</Link></button></div>
    //       </div>





    //     </div>
  )
}

export default Header
