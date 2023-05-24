import Contactform from "../component/Contactform";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import ContactImg from "../Asset/contact.jpg";
import Hero from "../component/hero";
function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
    cName="hero-mid"
    heroImg={ContactImg}
    title="Contact"x
    btnClass="hide"
    />
        <Contactform/>
        <Footer/>
        </>
    )
}
export default Contact;