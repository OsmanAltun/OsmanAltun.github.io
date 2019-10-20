import React from "react"
import email from "../assets/email.svg"
import linkedin from "../assets/linkedin.svg"
import cv from "../assets/CV.svg"
import github from "../assets/github.svg"

type state ={
    curriculumVitae: string
}

class Contact extends React.Component<any, state>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            curriculumVitae: require("../assets/curriculumVitae.pdf"),
        }
    }

    render()
    {
        return(<section id="contact">
            <h2><span className="red">Co</span>ntact</h2>
            <div className="container">
                <a href="mailto:0914026@hr.nl"><img src={email} alt=""/></a>
                <a href="https://www.github.com/osmanaltun"><img src={github} alt=""/></a>
                <a href={this.state.curriculumVitae}><img src={cv} alt=""/></a>
                <a href="https://www.linkedin.com/in/osmanaltun"><img src={linkedin} alt=""/></a>
            </div>
        </section>);
    }
}

export default Contact