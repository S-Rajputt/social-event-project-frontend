
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Hero from "../component/hero";
import Eventinfo from "../component/Eventinfo";
function Home() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero"
    heroImg="https://saveourseas.com/sosf-shark-education-centre/wp-content/uploads/sites/3/20220411-image05danelwentzel-copyright.jpg"
    />
    <Eventinfo/>
    {/* <Crousel/> */}
    {/* <Example/> */}
    {/* <EventInfo/> */}
    <Footer/>
    </>
   
  );
}

export default Home;