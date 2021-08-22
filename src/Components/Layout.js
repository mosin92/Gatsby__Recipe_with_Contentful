import React from 'react'
import Footer from './Footer'
import Header from './Header'
import {Main,footerWrapper,content} from '../Styles/Header.module.css'
function Layout({children}) {
    return (
        <div className={Main}>
            <div className={content}>
                <Header />
            {children}
            </div>
             <Footer />
            
        </div>
    )
}

export default Layout
