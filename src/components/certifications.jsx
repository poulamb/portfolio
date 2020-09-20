import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Certifications = () => {
    const certs = useStaticQuery(
        graphql`
            query {
                az201: file(relativePath: { eq: "az201.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                az900: file(relativePath: { eq: "az900.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                ocip: file(relativePath: { eq: "OCI_Professional.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                ocia: file(relativePath: { eq: "OCI_Associate.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                salesforce: file(relativePath: { eq: "salesforce.png" }) {
                    childImageSharp {
                        # Specify the image processing specifications right in the query.
                        fixed(width: 150, height: 150) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `)

    return (
        <div class="box" style={{ marginTop: '-10rem' }}>
            <div class="columns is-centered has-text-centered">
                <div class="column is-half">
                    <p class='title'>Certifications</p>
                </div>
            </div>
            <div class="columns is-mobile is-vcentered has-text-centered">
                <div class="column">
                    <Img fixed={certs.az201.childImageSharp.fixed} alt="AZ-201" />
                    <p class='subtitle'>Azure Developer</p>
                </div>
                <div class="column">
                    <Img fixed={certs.az900.childImageSharp.fixed} alt="AZ-900" />
                    <p class='subtitle'>Azure Fundamentals</p>
                </div>
                <div class="column">
                    <Img fixed={certs.ocip.childImageSharp.fixed} alt="OCIP" />
                    <p class='subtitle'>OCI Architect Professional</p>
                </div>
                <div class="column">
                    <Img fixed={certs.ocia.childImageSharp.fixed} alt="OCIA" />
                    <p class='subtitle'>OCI Architect Associate</p>
                </div>
                <div class="column">
                    <Img fixed={certs.ocia.childImageSharp.fixed} alt="OCIF" />
                    <p class='subtitle'>OCI Foundation Associate</p>
                </div>
                <div class="column">
                    <Img fixed={certs.salesforce.childImageSharp.fixed} alt="Salesforce" />
                    <p class='subtitle'>Platform Developer I</p>
                </div>
            </div>
        </div>
    )
}

export default Certifications
