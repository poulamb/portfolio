import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faServer,
    faPencilRuler,
    faCloud,
    faDatabase,
    faTools
} from '@fortawesome/free-solid-svg-icons'

const Techstack = () => {
    return (
        <section class="hero is-dark is-medium">
            <div class="hero-body" style={{ paddingTop: '12rem' }}>
                <div class="container">
                    <div class="columns has-text-centered">
                        <div class="column ">
                            <p class='title is-size-2-desktop is-size-3-tablet is-size-4-mobile'>Tech Stack</p>
                        </div>
                    </div>
                    <div class="columns is-desktop is-centered">
                        <div class='column'>
                            <div class='card' style={{height: '530px'}}>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <FontAwesomeIcon icon={faServer} size='3x' />
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4 has-text-black">Backend</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Languages</p>
                                        <ul>
                                            <li>Java</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Frameworks</p>
                                        <ul>
                                            <li>Spring Boot</li>
                                            <li>NodeJS/ExpressJS</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Technologies</p>
                                        <ul>
                                            <li>REST API</li>
                                            <li>Microservices</li>
                                            <li>System Design</li>
                                            <li>Message Queue</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='card' style={{height: '530px'}}>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <FontAwesomeIcon icon={faPencilRuler} size='3x' />
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4 has-text-black">Frontend</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Languages</p>
                                        <ul>
                                            <li>HTML/CSS</li>
                                            <li>Javascript</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Frameworks</p>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>SAP UI5</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>UI Methodologies</p>
                                        <ul>
                                            <li>UI Accessibility</li>
                                            <li>Material UI</li>
                                            <br/>
                                            <br/>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='card' style={{height: '530px'}}>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <FontAwesomeIcon icon={faDatabase} size='3x' />
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4 has-text-black">Data Related</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>SQL Database</p>
                                        <ul>
                                            <li>MySQL</li>
                                            <li>Oracle</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>NoSQL Database</p>
                                        <ul>
                                            <li>MongoDB</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Data Science</p>
                                        <ul>
                                            <li>Tableau</li>
                                            <li>Data Analysis using Python</li>
                                            <li>Inference model creation</li>
                                        </ul>
                                    </div>                                   
                                </div>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='card' style={{height: '530px'}}>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <FontAwesomeIcon icon={faCloud} size='3x' />
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4 has-text-black">Infra</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Frameworks</p>
                                        <ul>
                                            <li>Docker</li>
                                            <li>Kubernetes</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Public Cloud</p>
                                        <ul>
                                            <li>Azure</li>
                                            <li>Oracle Cloud</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>CRM Solutions</p>
                                        <ul>
                                            <li>Salesforce</li>
                                            <li>Clariti (BasicGov)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='column'>
                            <div class='card' style={{height: '530px'}}>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <FontAwesomeIcon icon={faTools} size='3x' />
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4 has-text-black">Tools</p>
                                        </div>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Version Control/Tracking</p>
                                        <ul>
                                            <li>Git</li>
                                            <li>Jira</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>IDE</p>
                                        <ul>
                                            <li>Eclipse</li>
                                            <li>VS Code</li>
                                        </ul>
                                    </div>
                                    <div class="content subtitle has-text-black">
                                        <p>Database Tools</p>
                                        <ul>
                                            <li>Informatica Cloud</li>
                                            <li>MySQL Workbench</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Techstack
