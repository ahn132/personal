import './App.css';
import {useEffect, useState} from "react";

import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"

import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function App() {
    const[scrollPosition, setScrollPosition] = useState(0);
    const[page, setPage] = useState(0)

    //scrolls to current page
    window.scrollTo(0, scrollPosition);

    //goes back to first page on page reload
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 20);
    }, []);


    //goes back to top of page on window resize to avoid scroll issues
    function handleResize() {
        setPage(0)
        setScrollPosition(0)
        window.scrollTo(0, 0)
    }
    window.addEventListener('resize', handleResize)




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
