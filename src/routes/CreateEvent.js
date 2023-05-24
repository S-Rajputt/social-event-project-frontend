import  CreateEvent  from "../component/CreateEvent";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Hero from "../component/hero";
import RegistraionImg from "../Asset/bg.jpg";
function CreateEvent1(){
    return(
        <>
         <Navbar/>
         <Hero
    cName="hero-mid1"
    heroImg={RegistraionImg}
    btnClass="hide"
    />
        <CreateEvent/>
        <Footer/>
        </>
    )
}
export default CreateEvent1;