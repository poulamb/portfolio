import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const Intro = () => {
    const profileImage = useStaticQuery(
        graphql`
            query {
                file(relativePath: { eq: "profile.jpg" }) {
                childImageSharp {
                    # Specify the image processing specifications right in the query.
                    fluid(maxWidth: 2048, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
                }
            }
        `)

    return (
        <section class="hero is-dark is-large-with-navbar">
            <div class='hero-body'>
                <div class='container'>
                    <div class="columns is-mobile is-vcentered">
                        <div class="column ">
                            <p class='title is-size-1-desktop is-size-3-tablet is-size-3-mobile'>Full Stack Developer and Solutions Consultant</p>
                            <p class='subtitle is-size-4-desktop is-size-6-tablet is-size-7-mobile'>
                                I code solutions and help solve problems
                            </p>
                        </div>
                        <div class="column" style={{ paddingTop: '4rem' }}>
                            <Img fluid={profileImage.file.childImageSharp.fluid} alt="Poulami's Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Intro
