import React from 'react'
import Layout from '../Components/Layout'
import SEO from '../Components/SEO'
import {style} from '../Styles/Error.module.css'
function Error() {
    return (
        <Layout>
            <SEO title="Error" />
            <div className={style}>
            <h1>Page Not Found</h1>
        </div>
        </Layout>
        
    )
}

export default Error
