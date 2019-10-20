import React from "react"

class Navigation extends React.Component
{
    constructor(props:any)
    {
        super(props)
        this.state = {

        }

        document.addEventListener('scroll', function(e)
        {
            if((e.target as HTMLDocument).scrollingElement!.scrollTop >= window.innerHeight)
            {
                document.querySelector("#nav")!.setAttribute("style", "background-color:gray; transition-duration:0.5s")
            }
            else
            {
                document.querySelector("#nav")!.setAttribute("style", "background-color:None")
            }
        });
    }

    render()
    {

        return(
            <nav id="nav">
                <ul>
                    <li> <a href="#intro">Home</a><span></span></li>
                    <li> <a href="#aboutMe">About Me</a><span></span></li>
                    <li> <a href="#portfolio">Portfolio</a><span></span></li>
                    <li> <a href="#contact">Contact</a><span></span></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation
