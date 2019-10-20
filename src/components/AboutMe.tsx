import React from "react"
import hro from "../assets/hro.jpg"
import emc from "../assets/emc.png"

type state = {
    curriculumVitae: string
}

class AboutMe extends React.Component<any, state>
{
    constructor(props:any)
    {
        super(props);
        this.state = {
            curriculumVitae: require("../assets/curriculumVitae.pdf")
        }
    }

    render()
    {
        return(<section id="aboutMe">
            <h2>About Me</h2>
            <p>
                I am a passionate software engineer who is always eager to learn something new.
                Curiosity is my motivation and it helped me acquire knowledge on different subjects and programming languages over the years.
                My portfolio gives an insight to recent projects I have contributed to. 
                For more information on my competences, view my <a href={this.state.curriculumVitae}><span className="yellow">Curriculum Vitae</span></a>.
            </p>

            <h2>Education</h2>
            <div id="clickableContainer" onClick={()=>window.open("https://rotterdamuas.com")}>
                <img src={hro} alt="hro"/>
                <div>
                    <h3><span className="yellow">University of Applied Sciences Rotterdam</span></h3>
                    <p>
                        Computer Science (BSc) <br/>
                        2016 - present
                    </p>
                </div>
            </div>
            <h2>Experience</h2>
            <div id="clickableContainer" onClick={()=>window.open("https://www.erasmusmc.nl/en/")}>
                <img src={emc} alt="hro"/>
                <div>

                    <h3><span className="yellow">Erasmus Medical Centre</span></h3>
                    <p>
                        2018 - 2019
                    </p>
                </div>
            </div>
        </section>);
    }
}

export default AboutMe