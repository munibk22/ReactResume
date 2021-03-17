import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import './App.css'

import ResumeTable from './skills/ResumeTable'


export default function ReactResume() {

    return (
        <div md="8" style={{ marginRight: "100%", marginLeft: "" }} >



            <Container fluid="md" style={{}} expand="sm">
                <Row className='absolute' style={{ margin: "", marginLeft: "5px", marginTop: "10px" }}>
                    <div  >
                        <hr className="hrNew" ></hr>
                        <hr className="hrNew"></hr>

                    </div>

                    <Col md="auto" className='hbox hexgrid1'>

                        <Row className="d-flex flex-row">

                            <div className="hexagon"></div>
                            <div className="hexagon"></div>
                        </Row>

                        <Row className="d-flex flex-row-reverse">

                            <div className="hexagon"></div>
                            <div className="hexagon"></div>
                        </Row>
                    </Col>

                    <Col md="auto">
                        <h1 style={{ color: "white", textAlign: "", margin: "auto" }}>Munib Khan Resume</h1>
                    </Col>

                    {/* <Col md="auto" className='hbox hexgrid1'>

    <Row className="d-flex flex-row">
    		
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>

    <Row className="d-flex flex-row-reverse">
    
            <div className="hexagon"></div>
            <div className="hexagon"></div>
    </Row>
</Col> */}
                    <div >
                        <hr className="hrEnd"></hr>
                        <p></p>
                        <hr className="hrEnd"></hr>
                    </div>

                </Row>
                <Row className="relative" style={{ width: "84vw" }} md="">

                    <Image src=
                        "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHw%3D&w=1000&q=80"

                        alt=""
                        className='imgstyle'
                        //style={{maxWidth: "", opacity:"", maxHeight:"600px", width:"100%", backgroundAttachment:"scroll"}}
                        fluid />

                    <div className='backdrop'></div>

                    <div className="absolute marginauto"><h1> Hello World</h1></div>
                </Row>

                <Container>
                    <Row style={{ padding: "0px" }}><ResumeTable /> </Row>
                </Container>
            </Container>





        </div>

    )
}