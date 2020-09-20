import React from 'react'
import Navbar from './navbar'

const Layout = ({ children }) => {
    return (
        <div class="has-navbar-fixed-top">
            <Navbar />
            {children}
        </div>
    )
}

export default Layout
