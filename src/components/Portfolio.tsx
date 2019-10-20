import React from "react"

import musicClassification from "../assets/musicClassification.png";
import flappyBird from "../assets/flappyBird.png";
import ecg from "../assets/ecg.png";
import recruiter from "../assets/recruiter.png";
import webshop from "../assets/webshop.png";
import stolenBikes from "../assets/stolenBikes.png";
import towerClimbingQuiz from "../assets/towerClimbingQuiz.png";


class Portfolio extends React.Component
{
    constructor(props:any)
    {
        super(props);
        this.state = {
        }
    }

    render()
    {
        return(<section id="portfolio">
            <h2><span className="red">RE</span>CENT <span className="red">PRO</span>JECTS</h2>
            <br/>


            <div className="item">
                <img src={musicClassification} alt="Music classification results"></img>
                <div className="textArea">
                    <h3><span className="pink">Classification of music with Deep Neural Networks</span></h3>
                    <h4><span className="gray">school project</span></h4>
                    <p>
                        This project was part of the minor Artificial Intelligence. Our project group tried to categorize music genres with the help of machine learning.
                        We trained the model by feeding it spectograms along with their designated genres (supervised learning). To accomplish this, we had to convert the sound signals to spectograms first.
                        The model is a modified version of the LeNet-5 network. The data we used, originates from Free Music Archive (FMA).
                    </p>
                </div>
            </div>

            <div className="item">
                <img src={flappyBird} alt="Flappy Bird"></img>
                <div className="textArea">
                    <h3><span className="pink">Flappy Bird with MonoGame</span></h3>
                    <h4><span className="gray">hobby project</span></h4>
                    <p>
                        This game is something I developed in my spare time for fun. I wanted to learn more about game design and I also wanted to create flexible classes. The idea was to reuse those classes in perhaps a future project.
                        MonoGame is the library I used to develop this game, because it's code based and it supports crossplatform builds. 
                        MonoGame gives the developer freedom of customization, because it's strictly code based. However, a lot of time is required to design the architecture.
                    </p>
                </div>
            </div>


            <div className="item">
                <img src={ecg} alt="Electrocardiogram"></img>
                <div className="textArea">
                    <h3><span className="pink">Detection of Heart Rhythm Disorders</span></h3>
                    <h4><span className="gray">Internship project</span></h4>
                    <p>
                        My assignment for the internship I did at Erasmus Medical Centre
                        was to detect the P wave in an electrogram, which is the depolarization of the atria.
                        This is a necessity for detecting certain heart rhythm disorders like atrial fibrillation.
                        It was not an easy task, because of the noisy data and the variety in the signals gathered
                        from each patient. An example might be the overlapping of the QRS-complex (the
                        ventricular contraction) with the P wave. To accomplish this, I used cross-correlation to match an image of the P-wave within the signal. 
                        I moved the template of the P-wave over the x-axis of the cardiogram. If the correlation was atleast 90%, it would be labeled as the P-wave.
                        To get the first P-wave I wrote function that would select a segment on the signal with the highest gradient, because the steepest gradient is always on the P-wave.
                    </p>
                </div>
            </div>

            <div className="item">
                <img src={recruiter} alt="Emerging Technologies"></img>
                <div className="textArea">
                    <h3><span className="pink">Emerging Technologies: Automated Recruiter</span></h3>
                    <h4><span className="gray">school project</span></h4>
                    <p>
                        Emerging technologies are new technologies that are currently being developed or will be developed within the next five to ten years. 
                        Emerging technologies will substantially change the business and social environment; the technology includes information technology, wireless data communication, human-machine communication, on-demand printing, biotechnologies and advanced robotics. 
                        This project is about a digital assistant who can recruit applicants based on an interview. 
                    </p>
                </div>
            </div>

            <div className="item">
                <img src={webshop} alt=".NET Core"></img>
                <div className="textArea">
                    <h3><span className="pink">Webshop using .NET Core</span></h3>
                    <h4><span className="gray">school project</span></h4>
                    <p>
                        The application contains basic functions for customers such as registering, logging in, ordering product and adding product to favorites. 
                        There are two user roles, called "Admin" and "Customer". 
                        In addition to the basic functions, the admin can also change orders, change or block users, change products and view statistics. 
                        The products and accounts are stored online in a PostGreSQL database. Customers can pay with a sandbox account from PayPal or with a test credit card.
                    </p>
                </div>
            </div>

            <div className="item">
                <img src={stolenBikes} alt="Stolen bikes visualization"></img>
                <div className="textArea">
                    <h3><span className="pink">Visualization of stolen bikes with Electron</span></h3>
                    <h4><span className="gray">school project</span></h4>
                    <p>
                        This project was developed using Electron. With Electron it is possible to create applications using HTML and JavaScript. We used Material Design Lite to style the application.
                        The dataset is visualized on the map using Google Maps API. The application includes a heat map, a point map, hiscores and charts. The application retrieves the data from REST API written in PHP.
                    </p>
                </div>
            </div>

            <div className="item">
                <img src={towerClimbingQuiz} alt="Tower climbing Quiz"></img>
                <div className="textArea">
                    <h3><span className="pink">Tower Climbing Quiz developed with PyGame</span></h3>
                    <h4><span className="gray">school project</span></h4>
                    <p>
                        This was one of my first large projects. We worked on this game with only two months worth of knowledge on Python. We used the PyGame library to develop this game. The theme of the game is the city Rotterdam.
                        When the player rolls the dice, the game asks the user questions on Rotterdam. The number thrown with the dice is the amount of steps the player climbs the tower. The first player to reach the top of the tower wins the game.
                        Answering the question wrong, can give the player a punishment. The different colors on the tower represent the categories of questions.
                    </p>
                </div>
            </div>


        </section>);
    }
}

export default Portfolio