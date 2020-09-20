
import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery } from 'gatsby'
import Certifications from './certifications'

const Workex = () => {
    const workex = useStaticQuery(
        graphql`
            query {
                ericsson: file(relativePath: { eq: "ericsson.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150, quality: 90) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                jpmc: file(relativePath: { eq: "jpmc.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150, quality: 90) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                tcs: file(relativePath: { eq: "tcs.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150, quality: 90) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                deloitte: file(relativePath: { eq: "deloitte.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150, quality: 90) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                sap: file(relativePath: { eq: "sap.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150, quality: 90) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `)

    return (
        <section class="hero is-warning is-large">
            <div class="hero-body" style={{ paddingTop: '3rem', marginBottom: '-25rem' }}>
                <div class="container">
                    <div class="columns is-centered has-text-centered">
                        <div class="column is-three-quarters">
                            <p class='title'>Hi, I'm Poulami!</p>
                            <p class='subtitle'>Since the beginning of my career 8 years ago,
                            I have worked with multiple technologies and built several products for various sectors
                            including Telecom, Banking, Government and B2B domain. I have collaborated across geographies for building solutions
                            and worked with some well known organizations.</p>
                        </div>
                    </div>
                    <div class="columns is-mobile is-vcentered">
                        <div class="column">
                            <Img fixed={workex.sap.childImageSharp.fixed} alt="SAP" />
                        </div>
                        <div class="column">
                            <Img fixed={workex.deloitte.childImageSharp.fixed} alt="Deloitte" />
                        </div>
                        <div class="column">
                            <Img fixed={workex.jpmc.childImageSharp.fixed} alt="JP Morgan" />
                        </div>
                        <div class="column">
                            <Img fixed={workex.tcs.childImageSharp.fixed} alt="TCS" />
                        </div>
                        <div class="column">
                            <Img fixed={workex.ericsson.childImageSharp.fixed} alt="Ericsson" />
                        </div>
                    </div>
                    <div class="columns is-centered has-text-centered" style={{ marginTop: '12rem' }}>
                        <Certifications />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Workex
