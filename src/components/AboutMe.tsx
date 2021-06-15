import React from "react"
import hro from "../assets/hro.jpg"
import emc from "../assets/emc.png"
import quintor from "../assets/quintor.png"

class AboutMe extends React.Component
{
    constructor(props:any)
    {
        super(props);
        this.state = {
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
            </p>

            <h2>Education</h2>
            <div id="clickableContainer" onClick={()=>window.open("https://rotterdamuas.com")}>
                <img src={hro} alt="hro"/>
                <div>
                    <h3><span className="yellow">University of Applied Sciences Rotterdam</span></h3>
                    <p>
                        Computer Science (BSc) <br/>
                        2016 - 2020
                    </p>
                </div>
            </div>
            <h2>Experience</h2>
            <div id="clickableContainer" onClick={()=>window.open("https://quintor.nl/")}>
                <img src={quintor} alt="quintor"/>
                <div>

                    <h3><span className="yellow">Quintor</span></h3>
                    <p>
                        Graduation Internship <br/>
                        2020
                    </p>
                </div>
            </div>
            <div id="clickableContainer" onClick={()=>window.open("https://www.erasmusmc.nl/en/")}>
                <img src={emc} alt="emc"/>
                <div>

                    <h3><span className="yellow">Erasmus Medical Centre</span></h3>
                    <p>
                        Internship <br/>
                        2018 - 2019
                    </p>
                </div>
            </div>
        </section>);
    }
}

export default AboutMe