import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import './Socials.css'

function Socials() {
    return(
        <div className="socials-column">
            <div>
                <a className="icon" href="https://www.instagram.com/sun.ahhhn/">
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                </a>
            </div>
            <div>
                <a className="icon" href="https://www.linkedin.com/in/sun-ahn-b92431237/">
                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                </a>
            </div>
            <div>
                <a className="icon" href="https://github.com/ahn132/">
                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                </a>
            </div>
        </div>
    )
}

export default Socials;
