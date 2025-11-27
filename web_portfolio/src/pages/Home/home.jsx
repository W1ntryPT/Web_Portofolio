import "./home.css";
import { Footer, Hero, Navbar,PrimaryButton, Projects, About, Skills } from "../../components"

const HomePage = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Skills/>
            <About/>
            <Footer/>
        </>
    );
}

export default HomePage;