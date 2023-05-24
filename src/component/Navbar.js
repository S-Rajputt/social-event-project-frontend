import React, { Component, useState } from 'react';
import { Menuitem } from "./Menuitem";
/* import React {useState} from 'react'; */
import "./Navbarstylesheet.css";
class Navbar extends Component{  
  state = {clicked: false}
handleClick = () => {
this.setState({clicked: !this.state.clicked})
}  
 render() {
  return (
  <nav className="NavbarItem">
      <h1 className="Navbar-logo">Social Event Manager</h1>
      <div className="menu-icons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : 
        "fas fa-bars"}></i>
      </div>
    <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
      {Menuitem.map((item , index)=>{
          return(
              <li key={index}>
        <a className={item.cName } href={item.url}>
        <i className={item.icon}></i>{item.title}</a>
      </li>
          )
      })}
    </ul>
  </nav>
);
}
}
export default Navbar;
