
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faTwitter,
    faGithub,
    faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
    faHeart
} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <section class="hero is-dark is-small">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-mobile is-vcentered">
                        <div class="column has-text-centered">
                            <p class="subtitle">“We learn more by looking for the answer to a question and not finding it than we do from learning the answer itself.” — Lloyd Alexander</p>
                            <div>
                                <a class="button is-outlined is-warning logo-button" href="https://www.linkedin.com/in/poulamb/"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
                                <a class="button is-outlined is-warning logo-button" href="https://github.com/poulamb/"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
                                <a class="button is-outlined is-warning logo-button" href="https://twitter.com/poulamb8/"><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class='subtitle is-6 has-text-centered'>
                Handcrafted with <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} /> using <FontAwesomeIcon icon={faReact} style={{ color: '#558cf3' }} />
            </p>
        </section>
    )
}

export default Contact
