import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class=" button is-outlined is-warning logo-button" href="/" style={{height: '35px', width: '35px'}}>
                    PB
                </a>

            </div>
            {/* <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                    </div>
                </div>
            </div> */}
        </nav>
    )
}

export default Navbar
