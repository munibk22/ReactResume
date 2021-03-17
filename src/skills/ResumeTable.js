import React from 'react'
import Softskills from "./SoftSkills";
import Education from './Education'
import Skills from './Skills'
import About from './About'
import Dynamic from "../components/Dynamic";
import Experience from './Experience'

export default function ResumeTable() {
    return (
        <section style={{ maxWidth: "98vw" }}>
            <div className="section" style={{ maxWidth: "" }}>
                <Dynamic />
            </div>

            <div
                style={{
                    width: "100vw",
                    margin: "auto",
                    marginTop: "5%",
                    textAlign: "center",
                    color: "white",
                }}
            >
                <h2>Skills and Education</h2>
                <hr className="hrRed" />
            </div>

            <div className="componentBox2 section ">
                <Skills />
            </div>
            <div className="componentBox2 section ">
                <Softskills />
            </div>
            <div className="componentBox2 section">
                <Education />
            </div>

            <div
                style={{
                    width: "100vw",
                    margin: "auto",
                    marginTop: "5%",
                    textAlign: "center",
                    color: "white",
                }}
            >

                <div
                    style={{
                        width: "",
                        margin: "auto",
                        marginTop: "5%",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    <h2>Projects</h2>
                    <hr className="hrRed" />
                </div>



                <h2>About Me and Experience</h2>
                <hr className="hrRed" />
            </div>

            <div className="componentBox2">
                <About />
            </div>
            <div className="componentBox2">

                <Experience />
            </div>
        </section>

    )
}
