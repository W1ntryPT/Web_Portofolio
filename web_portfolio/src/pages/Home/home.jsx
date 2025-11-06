import "./home.css";
import { Footer, Hero, Navbar,PrimaryButton } from "../../components"

const HomePage = () => {
    return(
        <div>
            <Navbar/>
            <Hero />
            <Footer/>
        </div>
    );
}

export default HomePage;