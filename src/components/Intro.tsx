import React from "react"

class Intro extends React.Component
{
    constructor(props : any)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        return(<section id="intro">
            <div className="textArea">
                <h1>O<span className="gray">sm</span><span className="red">an</span> <span className="gray">Al</span><span className="pink">tu</span>n</h1><br/>
                <h2>A computer science student</h2>
                <p> 
                    I have contributed to <span className="pink">multiple projects</span> which include the following subjects: <br/>
                </p>
                <ul>
                    <li>
                        Web development <span className="gray">(.NET Core, React)</span>
                    </li>
                    <li>
                        Mobile development <span className="gray">(Xamarin, Monogame)</span>
                    </li>
                    <li>
                        Game Development <span className="gray">(Monogame, PyGame)</span>
                    </li>
                    <li>
                        Artificial Intelligence <span className="gray">(Tensorflow, Anaconda/Jupyter Notebook)</span>
                    </li>
                    <li>
                        Database Design <span className="gray">(PostgreSQL)</span>
                    </li>
                </ul>
            </div>
        </section>)
    }
}


export default Intro