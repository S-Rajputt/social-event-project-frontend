import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
import AboutImg from "../Asset/about.jpg";
import Hero from "../component/hero";
function About(){
    return(
    <>
        <Navbar/>
        <Hero
    cName="hero-mid"
    heroImg={AboutImg}
    title="About"
    btnClass="hide"
    />
        <Aboutus/>
        <Footer/>
        </>
    )
}
export default About;