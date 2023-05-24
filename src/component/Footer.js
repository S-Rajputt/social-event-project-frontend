import "./Footerstylesheet.css";

const Footer =() =>{
return(
    <div className="footer">
        <div className="top">
            <div>
                <h1>Social Event Manager</h1>
            </div>
            <div>
                <a href="">
                    <i className="fa-brands fa-facebook-square"></i>
                </a>
                <a href="">
                    <i className="fa-brands fa-instagram-square"></i>
                </a>
                <a href="">
                    <i className= "fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
<div className="bottom">
    <div>
        <h4>About</h4>
        <a href="/About">About us</a>
        <a href="/">Blog</a>
        <a href="/Contact">Contact us</a>
    </div>
    <div>
        <h4>Organize Events</h4>
        <a href="/">Host Virtual Events</a>
        <a href="/">Fitness Events</a>
        <a href="/">Entertainment Event</a>
    </div>
    <div>
        <h4>Popular Cities</h4>
        <a href="/">Mumbai</a>
    </div>
</div>
    </div>
)
}

export default Footer