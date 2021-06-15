import React from "react"
import email from "../assets/email.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"


class Contact extends React.Component
{
    constructor(props:any)
    {
        super(props);
        this.state = {
        }
    }

    render()
    {
        return(<section id="contact">
            <h2><span className="red">Co</span>ntact</h2>
            <div className="container">
                <a href="mailto:za5hzkf5q@relay.firefox.com"><img src={email} alt=""/></a>
                <a href="https://www.github.com/osmanaltun"><img src={github} alt=""/></a>
                <a href="https://www.linkedin.com/in/osmanaltun"><img src={linkedin} alt=""/></a>
            </div>
        </section>);
    }
}

export default Contact