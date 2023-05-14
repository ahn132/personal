import './App.css';
import {useState} from "react";

import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Socials from "./components/Socials";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
    const[scrollPosition, setScrollPosition] = useState(0);
    const[page, setPage] = useState(0)
    window.scroll(0, scrollPosition)

    function goUp() {
        if (scrollPosition !== 0) {
            setScrollPosition(scrollPosition => scrollPosition - window.innerHeight)
            setTimeout(() => {setPage(page => page - 1)}, 500);
        }
    }

    function goDown() {
        setScrollPosition(scrollPosition => scrollPosition + window.innerHeight);
        setTimeout(() => {setPage(page => page + 1)}, 500);
    }

    return (
        <>
            <FontAwesomeIcon className={`up ${scrollPosition !== 0 ? "show": ""}`} icon={faArrowUp} size="2xl" onClick={goUp}/>
            <FontAwesomeIcon className={`down ${scrollPosition !== (2 * window.innerHeight) ? "show": ""}`} icon={faArrowDown} size="2xl" onClick={goDown}/>
            <Home page={page}/>
            <Projects page={page}/>
            <About page={page}/>
        </>
    );
}

export default App;
