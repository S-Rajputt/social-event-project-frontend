import SignUpForm1 from "../component/SignUpForm1";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import SignupImg from "../Asset/signup.jpg";
function sign_up(){
    return(
        <>
         <Navbar/>
         <Hero
    cName="hero-mid1"
    heroImg={SignupImg}
    btnClass="hide"
    />
        <SignUpForm1/>
        <Footer/>
        </>
    )
}
export default sign_up;