import "./home.css";
import { Footer, Hero, Navbar,PrimaryButton, Projects } from "../../components"

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default HomePage;