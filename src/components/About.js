import Socials from "./Socials";
import Gallery from "./Gallery";
import "./About.css"
import sun from "../assets/sun.jpeg"


function About() {
    return(
        <div className="about-container">
            <p className="about-header">About Me</p>
            <div className="about-content">
                <div className="col-1">
                    <img className="me" src={sun} alt="This is me!"/>
                    <p className="bio">Currently studying computer science at Purdue University. Feel free to get in touch!</p>
                </div>
                <Gallery />
                <Socials/>
            </div>
        </div>
    )
}

export default About;