import "./Projects.css";

import Typewriter from"typewriter-effect"

//imports for project images
import marketplace_img from "../assets/marketplace.png"
import pokedex_img from "../assets/pokedex.png"
import yolov3_img from "../assets/yolov.png"
import {useState} from "react";

function Projects(props) {

    //descriptions for individual projects
    const marketplace_desc = "This project is a fully functional marketplace where buyers and sellers can " +
        "interact. Sellers can post their products onto their store pages, where buyers can then purchase them. " +
        "The marketplace has user authentication, allows multiple connections,and updates in real-time. The project " +
        "was written entirely in Java."
    const pokedex_desc= "This is a webpage made with React listing all pokemon using the PokeAPI. " +
        "Pokemon can also be added to the team, which is saved between sessions through Firebase"
    const yolov3_desc = "With a team of 3 other Purdue students, we created a YOLOv3 ML model" +
        " from scratch using PyTorch. We tested our model on the ETH and WIDER2019 datasets, with fairly good results."

    //arrays for names, descriptions, and images
    const names = ["Real-Time Marketplace", "Pokedex", "YOLOv3"]
    const descriptions = [marketplace_desc, pokedex_desc, yolov3_desc]
    const images = [marketplace_img, pokedex_img, yolov3_img]

    //index to determine project to display
    const [projectIndex, setProjectIndex] = useState(0)

    function nextProject() {
        if (projectIndex < names.length - 1) {
            setProjectIndex(projectIndex + 1)
        } else {
            setProjectIndex(0)
        }
    }

    return(
        <div className="projects-container">
            <Typewriter className="projects-header"
                options={{
                    strings: ['My Projects', 'My Creations', 'My Free Time :)'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "projects-header",
                    cursorClassName: "cursor",
                }}
            />
            <div className={`project ${props.page === 1 ? "projects-animate" : "projects-hide"}`} onAnimationIteration={nextProject}>
                <p className="project-title">{names[projectIndex]}</p>
                <img className="project-img" src={images[projectIndex]} alt="gallery"/>
                <p className="project-desc">{descriptions[projectIndex]}</p>
            </div>
        </div>
    )
}

export default Projects;