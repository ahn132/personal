//images for the gallery
import photoOne from "../assets/gal1.jpg"
import photoTwo from "../assets/gal2.JPG"
import photoThree from "../assets/gal3.JPG"
import photoFour from "../assets/gal4.JPG"
import photoFive from "../assets/gal5.jpg"

import {useState} from "react";
import "./Gallery.css"
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Gallery() {

    const[photoNum, setPhotoNum] = useState(0);
    const photos = [photoOne, photoTwo, photoThree, photoFour, photoFive]

    function prevPhoto() {
        if (photoNum !== 0) {
            setPhotoNum(photoNum - 1)
        } else {
            setPhotoNum(photos.length - 1)
        }
    }

    function nextPhoto() {
        if (photoNum !== photos.length - 1) {
            setPhotoNum(photoNum + 1)
        } else {
            setPhotoNum(0)
        }
    }

    return(
        <div className="gallery">
            <img className="photo" src={photos[photoNum]} alt="sun"></img>
            <div className="photo-nav">
                <FontAwesomeIcon className="left" onClick={prevPhoto} icon={faArrowLeft} size="2xl"/>
                <FontAwesomeIcon className="right"  onClick={nextPhoto} icon={faArrowRight} size="2xl"/>
            </div>
        </div>

    )

}

export default Gallery;