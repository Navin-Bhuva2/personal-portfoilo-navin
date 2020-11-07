import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import navin from './img/navin.jpg'
import '../App.css'; 

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <div style={{ overflow: "auto", margin: "auto", width: "1200px", height: "600px" }}>
                        <Cell col={12}>
                            <br></br>
                            <br></br>
                    
                            <h1>Navin Bhuva</h1>
                            <img src={navin} alt="Navin" width={"200px"} />
                            <div className="banner-text">
                                <h1>Front end Developer</h1>

                                <hr />

                                <p>HTML/CSS | Bootstrap | JavaScript | React |</p>

                                <div className="social-links">

                                    {/* LinkedIn */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                                    </a>

                                    {/* Github */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-github-square" aria-hidden="true" />
                                    </a>

                                    {/* Freecodecamp */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-free-code-camp" aria-hidden="true" />
                                    </a>

                                    {/* Youtube */}
                                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fa fa-youtube-square" aria-hidden="true" />
                                    </a>

                                </div>
                            </div>
                            <br></br>

                         


                        </Cell>
                        <Cell col={12}>
                            <br></br>
                            <br></br>
                            <div className="banner-text">
                                <br></br>
                            <p style={{fontSize: "40px"}}>Blog:</p>
                                <hr />
                                <br></br>
                                <p>The best a man can get</p>
                            </div>
                            <br></br>
                        </Cell>
                        <Cell col={12}>
                            <br></br>
                            <br></br>
                            <div className="banner-text">
                                <br></br>
                                <p style={{fontSize: "40px"}}>Skills:</p>
                                <p>React.js</p>
                                <p>HTML/CSS</p>
                                <p>Java-Script</p>
                                <p>Angular</p>
                                <hr />
                                <br></br>
                                <p style={{fontSize: "40px"}}>Experience:</p>
                                <p>One year in React.js With intership</p>
                            </div>
                            <br></br>
                        </Cell>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing;
