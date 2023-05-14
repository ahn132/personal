import "./Home.css"
function Home(props) {

    return(
        <div className="home">
            <p className={`intro-1 ${props.page === 0 ? "fade-intro-1" : ""}`}>My name is Sun Ahn</p>
            <p className={`intro-2 ${props.page === 0 ? "fade-intro-2" : ""}`}>and this is my portfolio</p>
        </div>
    )
}

export default Home;