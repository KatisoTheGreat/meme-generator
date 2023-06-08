import React from "react";
import logo from "../images/troll-face.png"
import "../style.css"

function Header() {
    return(
        <header className="header">
            <img src={logo} alt="" className="logo"/>
            <h2 className="title">Meme Generator</h2>
        </header>
    )
}

export default Header