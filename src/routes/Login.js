import Login from "../component/login";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import SignupImg from "../Asset/signup.jpg";
function Login1(){
    return(
        <>
         <Navbar/>
         <Hero
    cName="hero-mid1"
    heroImg={SignupImg}
    btnClass="hide"
    />
        <Login/>
        <Footer/>
        </>
    )
}
export default Login1;