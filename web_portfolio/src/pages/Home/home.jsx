import "./home.css";
import { Footer, Hero, Navbar,PrimaryButton, Projects } from "../../components"

const HomePage = () => {
    return(
        <>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default HomePage;