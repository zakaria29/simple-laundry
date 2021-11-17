import React from "react"
import "../index.css";
import logo from "../assets/logo.png"
export default function Header(){
    return (
        <div id="header">
            <img src={logo} style={{position:"absolute", right:30, top: 20}} />
        </div>
    )
}