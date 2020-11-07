import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Doc from './DocService';
import PdfContainer from './pdfContainer';
import { Grid, Cell } from 'react-mdl';
import Education from '../education';
import Experience from '../experience';
import Skills from '../skills';
import TextToSvg from "text-to-svg";
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Still, Jaime',
            rank: 'SGT',
            description: 'Demonstrate how to export an HTML section to PDF'
        };
    }

    createPdf = (html) => Doc.createPdf(html);

    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <section className="header-bar">
                    {/* <span className="header">Export React Component to PDF</span> */}
                </section>
                <PdfContainer createPdf={this.createPdf}>
                    <React.Fragment>
                        <div>
                            <Grid>
                                <Cell col={4}>
                                    <div style={{ textAlign: 'center' }}>
                                        <img
                                            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                            alt="avatar"
                                            style={{ height: '200px' }}
                                        />
                                    </div>

                                    <h2 style={{ paddingTop: '2em' }}>Navin Bhuva</h2>
                                    <h4 style={{ color: 'grey' }}>Programmer</h4>
                                    {/* <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} /> */}
                                    {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                                    <h5>Address</h5>
                                    <p>1 Hacker Way Menlo Park, 94025</p>
                                    <h5>Phone</h5>
                                    <p>(123) 456-7890</p>
                                    <h5>Email</h5>
                                    <p>someone@example.com</p>
                                    <h5>Web</h5>
                                    <p>mywebsite.com</p>
                                    <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                                </Cell>
                                <Cell className="resume-right-col" col={8}>
                                    <h2>Personal Detail</h2>
                                       
                                    <h2>Education</h2>


                                    <Education
                                        startYear={2014 - 15}
                                        endYear={2016}
                                        schoolName="Vidhyaniketan Shaikshanik Sankul(Junagadh)"
                                        schoolDescription="Result : 90%"
                                    />

                                    <Education
                                        startYear={2016 - 17}
                                        endYear={2020}
                                        schoolName="Noble Engeenering College (JUNAGADH)"
                                        schoolDescription="CGPA: 8"
                                    />
                                    <hr style={{ borderTop: '3px solid #e22947' }} />

                                    <h2>Experience</h2>

                                    <Experience
                                        startYear={<p>june(2019)</p>}
                                        endYear={<p>oct(2019)</p>}
                                        jobName="Traning"
                                        jobDescription="complete training in angular and react"
                                    />

                                    <Experience
                                        startYear={<p>nov-2019</p>}
                                        endYear={"Continue"}
                                        jobName="Developer"
                                        jobDescription="Started working react.js in"
                                    />
                                    <hr style={{ borderTop: '3px solid #e22947' }} />

                                    <h2>Skills</h2>
                                    <Skills
                                        skill="javascript"
                                        progress={100}
                                    />
                                    <Skills
                                        skill="HTML/CSS"
                                        progress={80}
                                    />
                                    <Skills
                                        skill="React"
                                        progress={80}
                                    />
                                    <Skills
                                        skill="Angular"
                                        progress={50}
                                    />

                                    <hr style={{ borderTop: '3px solid #e22947' }} />

                                    <div style={{fontSize: "20px"}}>Contact Me:</div>

                                    <h6>Mobile No:9924936804</h6> 
                                    <h6>Email Id :  Navinbhuva2@gmail.com</h6> 
                                </Cell>
                            </Grid>
                        </div>

                    </React.Fragment>
                </PdfContainer>
            </React.Fragment>
        );
    }
}

export default Index;